(ns manas.frontend.views.map
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [manas.frontend.state :as state]
            [manas.frontend.ui.modals :as modals]
            [manas.frontend.ui.buttons :as btn]
            [manas.frontend.ui.menu :as menu]
            [manas.frontend.ui.panels.stages :as stages]
            [manas.frontend.ui.panels.artists :as artists]
            [manas.frontend.dev.controls :as dev]))

;; ── Image georeferencing ──────────────────────────────────────────
(def img-w 1440)
(def img-h 1920)
(def img-north 46.26629084547643)
(def img-south 46.25869538678212)
(def img-west  20.133819580078125)
(def img-east  20.1434326171875)

(defn lng->px [lng]
  (* (/ (- lng img-west) (- img-east img-west)) img-w))

(defn lat->py [lat]
  (* (/ (- img-north lat) (- img-north img-south)) img-h))

;; ── Festival boundary [lng lat] ───────────────────────────────────
(def boundary
  [[20.137585729121383 46.26232807355396]
   [20.13773635992962  46.26155743394304]
   [20.138532551345605 46.2609296075656]
   [20.13935456518732  46.261001019459144]
   [20.139651523066135 46.26081356304036]
   [20.140400373371932 46.26094448505103]
   [20.14081353216045  46.2614175869837]
   [20.140912518120842 46.26236080318151]
   [20.139259882964552 46.2625928854367]
   [20.138257112153724 46.26266131976024]
   [20.137602944070693 46.26225368796318]])

;; ── Simulation route [lng lat] ────────────────────────────────────
(defonce sim-route (r/atom []))
(defonce trail     (r/atom []))

;; ── Point-in-polygon ──────────────────────────────────────────────
(defn- inside-festival? [lng lat]
  (let [n (count boundary)]
    (loop [i 0 j (dec n) inside false]
      (if (= i n) inside
        (let [[xi yi] (nth boundary i)
              [xj yj] (nth boundary j)
              cross?  (and (not= (> yi lat) (> yj lat))
                           (< lng (+ (* (/ (- xj xi) (- yj yi)) (- lat yi)) xi)))]
          (recur (inc i) i (if cross? (not inside) inside)))))))

;; ── Nav state ────────────────────────────────────────────────────
(defonce active-nav (r/atom :stages))



;; ── Catmull-Rom smooth path ──────────────────────────────────────
(defn- cr-seg [pts n i]
  (let [pt   (fn [j] (nth pts (mod (+ j n) n)))
        [p0x p0y] (pt (dec i))
        [p1x p1y] (pt i)
        [p2x p2y] (pt (inc i))
        [p3x p3y] (pt (+ i 2))
        cp1x (+ p1x (/ (- p2x p0x) 6))
        cp1y (+ p1y (/ (- p2y p0y) 6))
        cp2x (- p2x (/ (- p3x p1x) 6))
        cp2y (- p2y (/ (- p3y p1y) 6))]
    (str "C " cp1x "," cp1y " " cp2x "," cp2y " " p2x "," p2y)))

(defn- catmull-rom-path [pts]
  (when (>= (count pts) 3)
    (let [n       (count pts)
          [sx sy] (first pts)]
      (str "M " sx "," sy " "
           (str/join " " (map #(cr-seg pts n %) (range n)))
           " Z"))))

;; ── User position — barefoot footprints ─────────────────────
(defn- foot-svg [mirror?]
  [:svg {:view-box "0 0 10 16" :width 10 :height 16
         :fill "#72ddd0"
         :style {:transform (when mirror? "scaleX(-1)")
                 :display "block"}}
   [:ellipse {:cx 5 :cy 11 :rx 4 :ry 5}]
   [:circle {:cx 2   :cy 5   :r 1.8}]
   [:circle {:cx 4   :cy 3.5 :r 1.5}]
   [:circle {:cx 6.5 :cy 3   :r 1.4}]
   [:circle {:cx 8.5 :cy 4   :r 1.3}]
   [:circle {:cx 9.5 :cy 5.5 :r 1.2}]])

(defn- trail-dot [pos idx n]
  (let [frac (/ (inc idx) n)
        opacity (max 0.18 (* 0.65 frac))
        size    (max 4 (* 7 frac))]
    [:div {:key   idx
           :style {:position      "absolute"
                   :left          (first pos)
                   :top           (second pos)
                   :width         size
                   :height        size
                   :background    "#72ddd0"
                   :border-radius "50%"
                   :opacity       opacity
                   :transform     "translate(-50%,-50%)"
                   :pointer-events "none"}}]))

(defn- user-footprints []
  [:div.map-footprints
   [:div.map-footprint.map-footprint--left  [foot-svg false]]
   [:div.map-footprint.map-footprint--right [foot-svg true]]])

;; ── Home marker ─────────────────────────────────────────────
(defn- home-marker-dot []
  (when-let [m @state/home-marker]
    [:div.home-marker
     {:class    (when @state/home-pulsing? "home-marker--pulse")
      :style    {:position "absolute" :left (:x m) :top (:y m)
                 :transform "translate(-50%,-100%)" :pointer-events "all"}
      :on-click (fn [e] (.stopPropagation e) (state/clear-home-marker!))}
     "\uD83C\uDFD5"]))

;; ── API place areas (SVG Catmull-Rom, pixel-positioned) ──────────
(defn- place-click-handler [p]
  (fn [e] (.stopPropagation e) (reset! state/modal-day nil) (state/switch-place! p)))

(defn- place-dot [p]
  [:div.place-btn
   {:key      (:id p)
    :style    {:position "absolute"
               :left     (:x p)
               :top      (:y p)
               :transform "translate(-50%,-50%)"}
    :on-click (place-click-handler p)}
   [:span.sparkle.s1] [:span.sparkle.s2] [:span.sparkle.s3]
   [:span.sparkle.s4] [:span.sparkle.s5] [:span.sparkle.s6]])

(defn- amorph-filter []
  [:filter {:id "amorph" :x "-40%" :y "-40%" :width "180%" :height "180%"}
   [:feGaussianBlur {:in "SourceGraphic" :stdDeviation "22" :result "glow"}]
   [:feMerge
    [:feMergeNode {:in "glow"}]
    [:feMergeNode {:in "SourceGraphic"}]]])

(defn- centroid [pts]
  [(/ (apply + (map first pts)) (count pts))
   (/ (apply + (map second pts)) (count pts))])

(defn- place-radial-gradient [p selected?]
  (let [pts    (:path p)
        [cx cy] (centroid pts)
        r      (apply max (map (fn [[x y]]
                                 (js/Math.sqrt (+ (* (- x cx) (- x cx))
                                                  (* (- y cy) (- y cy)))))
                               pts))
        c1     (if selected? "#ff7c2a" "#00a896")
        c2     (if selected? "#ffaa55" "#00d4aa")]
    [:radialGradient {:key           (str "grad-" (:id p))
                      :id            (str "grad-" (:id p))
                      :gradientUnits "userSpaceOnUse"
                      :cx cx :cy cy :r (* r 1.4)}
     [:stop {:key "s0" :offset "0%" :stop-color c1 :stop-opacity (if selected? "0.55" "0.42")}
     [:animate {:attributeName "stop-color"
                :values (str c1 ";" c2 ";" c1)
                :dur "10s" :calcMode "spline"
                :keySplines "0.45 0 0.55 1;0.45 0 0.55 1"
                :repeatCount "indefinite"}]]
     [:stop {:key "s100" :offset "100%" :stop-color c1 :stop-opacity "0"}
      [:animate {:attributeName "stop-color"
                 :values (str c1 ";" c2 ";" c1)
                 :dur "10s" :calcMode "spline"
                 :keySplines "0.45 0 0.55 1;0.45 0 0.55 1"
                 :repeatCount "indefinite"}]]]))

(defn- place-svg-area [p d selected?]
  (let [c1 (if selected? "#ff7c2a" "#00a896")
        c2 (if selected? "#ffaa55" "#00d4aa")]
    [:path {:key          (:id p)
            :class        "place-area"
            :d            d
            :fill         (str "url(#grad-" (:id p) ")")
            :stroke       c1
            :stroke-width (if selected? 4 3)
            :filter       "url(#amorph)"
            :on-click     (place-click-handler p)}
     [:animate {:attributeName "stroke"
                :values        (str c1 ";" c2 ";" c1)
                :dur           "10s" :calcMode "spline"
                :keySplines    "0.45 0 0.55 1;0.45 0 0.55 1"
                :repeatCount   "indefinite"}]]))

(defn place-areas []
  (let [with-path     (filter #(catmull-rom-path (:path %)) @state/api-places)
        with-path-ids (set (map :id with-path))
        without-path  (remove #(with-path-ids (:id %)) @state/api-places)
        selected-id   (:id @state/modal-place)]
    [:<>
     (for [p without-path] [place-dot p])
     [:svg {:style {:position "absolute" :left 0 :top 0
                    :width img-w :height img-h
                    :overflow "visible" :pointer-events "none"}}
      (into [:defs [amorph-filter]]
            (map #(place-radial-gradient % (= (:id %) selected-id)) with-path))
      (for [p with-path]
        ^{:key (:id p)} [place-svg-area p (catmull-rom-path (:path p)) (= (:id p) selected-id)])]]))

;; ── Bottom nav ───────────────────────────────────────────────────
(defn nav-menu []
  [:div.nav-menu
   [:svg.nav-blob-bg {:viewBox "0 0 300 68" :preserveAspectRatio "none"}
    [:defs
     [:filter {:id "nav-amorph" :x "-15%" :y "-30%" :width "130%" :height "160%"}
      [:feTurbulence {:type "fractalNoise" :baseFrequency "0.025" :numOctaves "2" :result "noise"}]
      [:feDisplacementMap {:in "SourceGraphic" :in2 "noise" :scale "10"
                           :xChannelSelector "R" :yChannelSelector "G" :result "warped"}]
      [:feGaussianBlur {:in "warped" :stdDeviation "7" :result "glow"}]
      [:feMerge
       [:feMergeNode {:in "glow"}]
       [:feMergeNode {:in "warped"}]]]]
    [:rect {:x "8" :y "8" :width "284" :height "52" :rx "26" :ry "26"
            :fill "rgba(0,168,150,0.18)" :stroke "#00a896" :stroke-width "1.5"
            :filter "url(#nav-amorph)"}
     [:animate {:attributeName "stroke"
                :values "#00a896;#00d4aa;#00a896"
                :dur "10s" :calcMode "spline"
                :keySplines "0.45 0 0.55 1;0.45 0 0.55 1"
                :repeatCount "indefinite"}]]]
   [:div.nav-buttons
    [:button.nav-btn
     {:class (when (= @active-nav :timetable) "active")
      :on-click #(reset! active-nav :timetable)}
     "⊟ Timetable"]
    [:button.nav-btn
     {:class (when (= @active-nav :stages) "active")
      :on-click #(reset! active-nav :stages)}
     "◈ Stages"]]])

;; ── Transform clamping ───────────────────────────────────────────
(defn- clamp-transform [{:keys [x y scale]}]
  (let [vw    (.-innerWidth js/window)
        vh    (.-innerHeight js/window)
        min-s (min (/ vw img-w) (/ vh img-h))
        s     (max min-s (min 8 scale))
        iw    (* img-w s)
        ih    (* img-h s)
        extra (* 0.3 (min vw vh))
        cx    (/ (- vw iw) 2)
        cy    (/ (- vh ih) 2)
        max-x (+ (if (>= iw vw) 0 cx) extra)
        min-x (- (if (>= iw vw) (- vw iw) cx) extra)
        max-y (+ (if (>= ih vh) 0 cy) extra)
        min-y (- (if (>= ih vh) (- vh ih) cy) extra)]
    {:scale s
     :x (max min-x (min max-x x))
     :y (max min-y (min max-y y))}))

;; ── Map component ─────────────────────────────────────────────────
(defn map-section [{:keys [dev?]}]
  (let [state      (r/atom {:gps-status :idle :inside? false :sim-done? false})
        transform  (r/atom {:x 0 :y 0 :scale 1})
        user-pos   (r/atom nil)
        map-ver    (r/atom "0")
        touch-ref  (atom {:dragging false :pinching false
                          :last-x 0 :last-y 0
                          :pinch-dist 0 :pinch-cx 0 :pinch-cy 0})
        watch-id   (atom nil)
        sim-idx    (atom 0)
        anim-frame (atom nil)
        node-ref      (atom nil)
        doc-wheel-ref (atom nil)

        animate-px (fn [from to on-done]
                     (when @anim-frame (js/cancelAnimationFrame @anim-frame))
                     (let [t0  (js/performance.now)
                           dur 1800]
                       (letfn [(tick [now]
                                 (let [t (min 1.0 (/ (- now t0) dur))
                                       e (- (* 3 t t) (* 2 t t t))
                                       [fx fy] from
                                       [tx ty] to]
                                   (reset! user-pos [(+ fx (* e (- tx fx)))
                                                    (+ fy (* e (- ty fy)))])
                                   (if (< t 1.0)
                                     (reset! anim-frame (js/requestAnimationFrame tick))
                                     (on-done))))]
                         (reset! anim-frame (js/requestAnimationFrame tick)))))

        animate-to
        (fn [target-x target-y]
          (when @anim-frame (js/cancelAnimationFrame @anim-frame))
          (let [t0     (js/performance.now)
                dur    500
                {:keys [x y scale]} @transform
                from-x x
                from-y y]
            (letfn [(tick [now]
                      (let [t  (min 1.0 (/ (- now t0) dur))
                            e  (- (* 3 t t) (* 2 t t t))
                            nx (+ from-x (* e (- target-x from-x)))
                            ny (+ from-y (* e (- target-y from-y)))]
                        (reset! transform (clamp-transform {:scale scale :x nx :y ny}))
                        (when (< t 1.0)
                          (reset! anim-frame (js/requestAnimationFrame tick)))))]
              (reset! anim-frame (js/requestAnimationFrame tick)))))

        center-on-place!
        (fn [p]
          (let [vw        (.-innerWidth js/window)
                vh        (.-innerHeight js/window)
                s         (:scale @transform)
                [px py]   (if (and (:x p) (:y p))
                            [(:x p) (:y p)]
                            (centroid (:path p)))
                modal-h   420
                visible-h (- vh modal-h)
                tx        (- (/ vw 2) (* px s))
                ty        (- (/ visible-h 2) (* py s))]
            (animate-to tx ty)))

        on-wheel
        (fn [e]
          (.preventDefault e)
          (when-not (or @state/modal-place @state/modal-artist)
            (if (.-ctrlKey e)
              (let [factor (if (> (.-deltaY e) 0) 0.9 1.1)
                    cx     (.-clientX e)
                    cy     (.-clientY e)
                    {:keys [x y scale]} @transform
                    ns     (* scale factor)
                    nx     (- cx (* (- cx x) factor))
                    ny     (- cy (* (- cy y) factor))]
                (reset! transform (clamp-transform {:scale ns :x nx :y ny})))
              (let [{:keys [x y scale]} @transform]
                (reset! transform (clamp-transform
                                    {:scale scale
                                     :x (- x (.-deltaX e))
                                     :y (- y (.-deltaY e))}))))))

        on-touch-move
        (fn [e]
          (when-not (or @state/modal-place @state/modal-artist)
            (.preventDefault e)
            (let [touches (.-touches e)
                tr      @touch-ref]
            (cond
              (and (:dragging tr) (= (.-length touches) 1))
              (let [t  (aget touches 0)
                    cx (.-clientX t)
                    cy (.-clientY t)
                    dx (- cx (:last-x tr))
                    dy (- cy (:last-y tr))]
                (swap! touch-ref assoc :last-x cx :last-y cy)
                (swap! transform (fn [{:keys [x y scale]}]
                                   (clamp-transform {:scale scale :x (+ x dx) :y (+ y dy)}))))

              (and (:pinching tr) (= (.-length touches) 2))
              (let [t1  (aget touches 0) t2 (aget touches 1)
                    dx  (- (.-clientX t2) (.-clientX t1))
                    dy  (- (.-clientY t2) (.-clientY t1))
                    d   (Math/sqrt (+ (* dx dx) (* dy dy)))
                    mx  (/ (+ (.-clientX t1) (.-clientX t2)) 2)
                    my  (/ (+ (.-clientY t1) (.-clientY t2)) 2)
                    f   (/ d (:pinch-dist tr))
                    {:keys [x y scale]} @transform
                    ns  (* scale f)
                    nx  (- mx (* (- (:pinch-cx tr) x) f))
                    ny  (- my (* (- (:pinch-cy tr) y) f))]
                (swap! touch-ref assoc :pinch-dist d :pinch-cx mx :pinch-cy my)
                (reset! transform (clamp-transform {:scale ns :x nx :y ny})))))))]

    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [vw (.-innerWidth js/window)
              vh (.-innerHeight js/window)
              s  (min (/ vw img-w) (/ vh img-h))
              tx (/ (- vw (* img-w s)) 2)
              ty (/ (- vh (* img-h s)) 2)]
          (reset! transform {:x tx :y ty :scale s}))
        (state/fetch-places!)
        (state/fetch-artists!)
        (state/fetch-acts!)
        (-> (js/fetch "/api/map-version")
            (.then #(.text %))
            (.then #(reset! map-ver %)))
        (-> (js/fetch "/api/sim-route")
            (.then #(.json %))
            (.then #(reset! sim-route (js->clj % :keywordize-keys false))))
        (when-let [node @node-ref]
          (.addEventListener node "wheel" on-wheel #js {:passive false})
          (.addEventListener node "touchmove" on-touch-move #js {:passive false}))
        (add-watch state/modal-place ::center-map
          (fn [_ _ _ new-place]
            (when new-place (center-on-place! new-place))))
        (let [handler (fn [e] (when (.-ctrlKey e) (.preventDefault e)))]
          (reset! doc-wheel-ref handler)
          (.addEventListener js/document "wheel" handler #js {:passive false})))

      :component-will-unmount
      (fn [_]
        (remove-watch state/modal-place ::center-map)
        (when @doc-wheel-ref
          (.removeEventListener js/document "wheel" @doc-wheel-ref))
        (when-let [node @node-ref]
          (.removeEventListener node "wheel" on-wheel)
          (.removeEventListener node "touchmove" on-touch-move))
        (when @watch-id (.clearWatch (.-geolocation js/navigator) @watch-id))
        (when @anim-frame (js/cancelAnimationFrame @anim-frame)))

      :reagent-render
      (fn [{:keys [dev?]}]
        (let [{:keys [gps-status inside? sim-done?]} @state
              {:keys [x y scale]} @transform
              upos @user-pos

              on-touch-start
              (fn [e]
                (let [touches (.-touches e)]
                  (if (= (.-length touches) 1)
                    (let [t (aget touches 0)]
                      (swap! touch-ref assoc
                             :dragging true :pinching false
                             :last-x (.-clientX t) :last-y (.-clientY t)))
                    (when (= (.-length touches) 2)
                      (let [t1 (aget touches 0) t2 (aget touches 1)
                            dx (- (.-clientX t2) (.-clientX t1))
                            dy (- (.-clientY t2) (.-clientY t1))
                            d  (Math/sqrt (+ (* dx dx) (* dy dy)))
                            mx (/ (+ (.-clientX t1) (.-clientX t2)) 2)
                            my (/ (+ (.-clientY t1) (.-clientY t2)) 2)]
                        (swap! touch-ref assoc
                               :pinching true :dragging false
                               :pinch-dist d :pinch-cx mx :pinch-cy my))))))

              on-touch-end
              (fn [_]
                (swap! touch-ref assoc :dragging false :pinching false))

              on-mouse-down
              (fn [e]
                (swap! touch-ref assoc
                       :dragging true :pinching false :mouse-moved false
                       :last-x (.-clientX e) :last-y (.-clientY e)))

              on-mouse-move
              (fn [e]
                (when (:dragging @touch-ref)
                  (let [cx (.-clientX e) cy (.-clientY e)
                        dx (- cx (:last-x @touch-ref))
                        dy (- cy (:last-y @touch-ref))]
                    (swap! touch-ref assoc :last-x cx :last-y cy :mouse-moved true)
                    (swap! transform (fn [{:keys [x y scale]}]
                                       (clamp-transform {:scale scale :x (+ x dx) :y (+ y dy)}))))))

              on-mouse-up
              (fn [_] (swap! touch-ref assoc :dragging false))

              on-mouse-leave
              (fn [_] (swap! touch-ref assoc :dragging false))

              start-gps
              (fn []
                (swap! state assoc :gps-status :loading)
                (reset! watch-id
                        (.watchPosition
                         (.-geolocation js/navigator)
                         (fn [pos]
                           (let [lat  (.. pos -coords -latitude)
                                 lng  (.. pos -coords -longitude)
                                 to   [(lng->px lng) (lat->py lat)]
                                 from (or @user-pos to)]
                             (swap! state assoc :gps-status :found
                                    :inside? (inside-festival? lng lat))
                             (animate-px from to (fn []))))
                         (fn [_] (swap! state assoc :gps-status :error))
                         #js {:enableHighAccuracy true})))

              walk-step
              (fn walk-step [idx]
                (if (>= idx (count @sim-route))
                  (swap! state assoc :sim-done? true)
                  (let [[lng lat] (nth @sim-route idx)
                        to   [(lng->px lng) (lat->py lat)]
                        from (or @user-pos to)]
                    (reset! sim-idx idx)
                    (swap! trail conj to)
                    (animate-px from to #(walk-step (inc idx))))))

              start-sim
              (fn []
                (when @watch-id (.clearWatch (.-geolocation js/navigator) @watch-id))
                (when @anim-frame (js/cancelAnimationFrame @anim-frame))
                (reset! sim-idx 0)
                (reset! trail [])
                (swap! state assoc :gps-status :found :sim-done? false)
                (let [[lng lat] (first @sim-route)]
                  (reset! user-pos [(lng->px lng) (lat->py lat)]))
                (walk-step 1))

              stop-sim
              (fn []
                (when @anim-frame (js/cancelAnimationFrame @anim-frame))
                (reset! sim-idx 0)
                (reset! trail [])
                (reset! user-pos nil)
                (swap! state assoc :gps-status :idle :sim-done? false))]

          [:section#garden.map-section
           [:div.map-viewport
            {:ref            #(reset! node-ref %)
             :class          (when (or @state/modal-place @state/modal-artist) "map-locked")
             :on-touch-start on-touch-start
             :on-touch-end   on-touch-end
             :on-mouse-down  on-mouse-down
             :on-mouse-move  on-mouse-move
             :on-mouse-up    on-mouse-up
             :on-mouse-leave on-mouse-leave
             :style          {:cursor (if (:dragging @touch-ref) "grabbing" "grab")}}
            [:div.map-world
             {:style {:transform (str "translate(" x "px," y "px) scale(" scale ")")
                      :transform-origin "0 0"
                      :width img-w :height img-h}
              :on-click (fn [e]
                          (cond
                            @state/placing-home?
                            (let [{mx :x my :y ms :scale} @transform
                                  px (/ (- (.-clientX e) mx) ms)
                                  py (/ (- (.-clientY e) my) ms)]
                              (state/set-home-marker! px py))
                            (and (or @state/modal-place @state/modal-artist)
                                 (not (:mouse-moved @touch-ref)))
                            (state/close-modal!)))}
             [:img {:src (str "/images/festival-map.png?v=" @map-ver)
                    :width img-w :height img-h
                    :draggable false
                    :style {:display "block" :user-select "none"}}]
             (let [tpos @trail n (count tpos)]
               (map-indexed (fn [i p] (trail-dot p i n)) tpos))
             (when upos
               [:div.map-user-dot
                {:style {:position "absolute"
                         :left (first upos) :top (second upos)
                         :transform "translate(-50%,-50%)"}}
                [user-footprints]])
             (place-areas)
             [home-marker-dot]]]
           [modals/place-modal]
           [modals/artist-modal]
           (when @state/placing-home?
             [:div.placement-hint "\uD83C\uDFD5 Tap the map to place your camp"])
           [stages/stages-panel]
           [artists/artists-panel]
           [menu/bottom-nav]

           (when dev?
             [dev/dev-controls
              {:gps-status gps-status :inside? inside? :sim-done? sim-done?
               :sim-idx @sim-idx
               :on-locate start-gps :on-simulate start-sim :on-stop stop-sim}])]))})))