(ns manas.frontend.views.map
  (:require [reagent.core :as r]
            [clojure.string :as str]))

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
(def sim-route
  [[20.13850 46.26220]
   [20.13870 46.26215]
   [20.13900 46.26210]
   [20.13910 46.26205]
   [20.13920 46.26200]
   [20.13940 46.26210]
   [20.13955 46.26225]
   [20.13960 46.26240]
   [20.13980 46.26230]
   [20.14010 46.26210]
   [20.14000 46.26175]
   [20.14000 46.26150]
   [20.13980 46.26135]
   [20.13950 46.26125]
   [20.13900 46.26120]
   [20.13850 46.26125]
   [20.13820 46.26135]
   [20.13810 46.26155]
   [20.13820 46.26180]
   [20.13830 46.26205]
   [20.13850 46.26220]])

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

;; ── State atoms ──────────────────────────────────────────────────
(defonce api-places    (r/atom []))
(defonce api-artists   (r/atom []))
(defonce api-acts      (r/atom []))
(defonce modal-place   (r/atom nil))
(defonce modal-artist  (r/atom nil))
(defonce modal-day     (r/atom nil))
(defonce modal-closing (r/atom false))
(defonce now-time      (r/atom (js/Date.now)))
(.setInterval js/window #(reset! now-time (js/Date.now)) 30000)

(defn close-modal! []
  (reset! modal-closing true)
  (js/setTimeout (fn []
                   (reset! modal-place nil)
                   (reset! modal-closing false)) 240))

(defn fetch-places! []
  (-> (js/fetch "/api/places")
      (.then #(.json %))
      (.then #(reset! api-places (js->clj % :keywordize-keys true)))))

(defn fetch-artists! []
  (-> (js/fetch "/api/artists")
      (.then #(.json %))
      (.then #(reset! api-artists (js->clj % :keywordize-keys true)))))

(defn fetch-acts! []
  (-> (js/fetch "/api/acts")
      (.then #(.json %))
      (.then #(reset! api-acts (js->clj % :keywordize-keys true)))))

;; ── Timetable helpers ─────────────────────────────────────────────
(defn- act->ms [date-str time-str]
  (when (seq time-str)
    (let [[h m] (map js/parseInt (.split time-str ":"))
          d     (js/Date. date-str)
          h'    (if (< h 7) (+ h 24) h)]
      (.setHours d h' m 0 0))))

(defn- countdown [ms now]
  (let [diff-m (/ (- ms now) 60000)
        d      (Math/floor (/ diff-m 1440))
        h      (Math/floor (mod (/ diff-m 60) 24))
        m      (Math/round (mod diff-m 60))]
    (cond
      (pos? d) (str d "d " h "h")
      (pos? h) (str h "h " m "m")
      :else    (str m "min"))))

(def ^:private day-labels
  {"2026-07-08" "Wed" "2026-07-09" "Thu" "2026-07-10" "Fri"
   "2026-07-11" "Sat" "2026-07-12" "Sun" "2026-07-13" "Mon"})

;; ── Place timetable panel ─────────────────────────────────────────
(defn- modal-acts [place-id day]
  (let [artist-map (->> @api-artists (map (juxt :id identity)) (into {}))
        day-acts   (->> @api-acts
                        (filter #(and (= (:place-id %) place-id) (= (:date %) day)))
                        (sort-by #(let [[h] (map js/parseInt (.split (:time %) ":"))]
                                    (if (< h 7) (+ h 24) h))))
        now        @now-time
        dated      (mapv #(assoc % :ms (act->ms day (:time %))) day-acts)
        past       (filterv #(and (:ms %) (< (:ms %) now)) dated)
        future     (filterv #(or (nil? (:ms %)) (>= (:ms %) now)) dated)]
    (if (seq day-acts)
      [:div.place-modal__acts
       (for [a past]
         (let [artist (get artist-map (:artist-id a))]
           [:div.place-modal__act.past {:key (:id a)}
            [:span.place-modal__act-time (:time a)]
            [:div.place-modal__act-info
             [:span.place-modal__act-name
              {:on-click (fn [e] (.stopPropagation e) (reset! modal-artist artist))
               :style {:cursor "pointer"}}
              (:name artist)]
             (when (seq (:description artist))
               [:span.place-modal__act-desc (:description artist)])]]))
       [:div.place-modal__now-line
        {:ref #(when % (js/setTimeout
                         (fn [] (.scrollIntoView % #js {:behavior "smooth" :block "nearest"}))
                         120))}
        [:span.place-modal__now-label
         (let [d (js/Date. @now-time)
               h (.getHours d)
               m (.getMinutes d)]
           (str (when (< h 10) "0") h ":" (when (< m 10) "0") m))]]
       (for [a future]
         (let [artist (get artist-map (:artist-id a))]
           [:div.place-modal__act {:key (:id a)}
            [:span.place-modal__act-time (:time a)]
            [:div.place-modal__act-info
             [:span.place-modal__act-name
              {:on-click (fn [e] (.stopPropagation e) (reset! modal-artist artist))
               :style {:cursor "pointer"}}
              (:name artist)]
             (when (seq (:description artist))
               [:span.place-modal__act-desc (:description artist)])]
            (when (:ms a)
              [:span.place-modal__act-countdown (countdown (:ms a) now)])]))]
      [:div.place-modal__no-acts "Lineup TBA"])))

;; ── Place modal ───────────────────────────────────────────────────
(defn place-modal []
  (when-let [p @modal-place]
    (let [place-id (:id p)
          dates    (->> @api-acts
                        (filter #(= (:place-id %) place-id))
                        (map :date)
                        distinct
                        sort)
          active   (or @modal-day (first dates))]
      [:div.place-modal
       {:class    (when @modal-closing "closing")
        :on-click close-modal!}
       [:div.place-modal__sheet
        {:on-click #(.stopPropagation %)}
        [:button.place-modal__close {:on-click close-modal!} "\u2715"]
        [:div.place-modal__header
         [:span.place-modal__icon (or (:icon p) "O")]
         [:span.place-modal__name (:name p)]]
        (when (seq (:description p))
          [:div.place-modal__place-desc (:description p)])
        (when (seq dates)
          [:div.place-modal__days
           (for [d dates]
             [:div.place-modal__day-tab
              {:key      d
               :class    (when (= d active) "active")
               :on-click (fn [e] (.stopPropagation e) (reset! modal-day d))}
              (get day-labels d d)])])
        (modal-acts place-id active)]])))

;; ── Artist modal ──────────────────────────────────────────────────
(defn artist-modal []
  (when-let [a @modal-artist]
    (let [place-map (->> @api-places (map (juxt :id identity)) (into {}))
          a-acts    (->> @api-acts
                         (filter #(= (:artist-id %) (:id a)))
                         (sort-by #(str (:date %) (:time %))))]
      [:div.place-modal.artist-modal
       {:on-click #(reset! modal-artist nil)}
       [:div.place-modal__sheet
        {:on-click #(.stopPropagation %)}
        [:button.place-modal__close {:on-click #(reset! modal-artist nil)} "\u2715"]
        [:div.place-modal__header
         [:span.place-modal__name (:name a)]]
        [:div.place-modal__artist-bio (:description a)]
        [:div.place-modal__acts
         (if (seq a-acts)
           (for [act a-acts]
             (let [place (get place-map (:place-id act))]
               [:div.place-modal__act {:key (:id act)}
                [:span.place-modal__act-time
                 (str (get day-labels (:date act) (:date act)) " " (:time act))]
                [:div.place-modal__act-info
                 [:span.place-modal__act-name (:name place)]
                 (when (:icon place)
                   [:span.place-modal__act-stage-icon (:icon place)])]]))
           [:div.place-modal__no-acts "No performances scheduled"])]]])))

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

;; ── API place areas (SVG Catmull-Rom, pixel-positioned) ──────────
(defn- place-click-handler [p]
  (fn [e] (.stopPropagation e) (reset! modal-day nil) (reset! modal-place p)))

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

(defn- place-radial-gradient [p]
  (let [pts    (:path p)
        [cx cy] (centroid pts)
        r      (apply max (map (fn [[x y]]
                                 (js/Math.sqrt (+ (* (- x cx) (- x cx))
                                                  (* (- y cy) (- y cy)))))
                               pts))]
    [:radialGradient {:id            (str "grad-" (:id p))
                      :gradientUnits "userSpaceOnUse"
                      :cx cx :cy cy :r (* r 1.4)}
     [:stop {:offset "0%" :stop-color "#c9a84c" :stop-opacity "0.38"}
     [:animate {:attributeName "stop-color"
                :values "#c9a84c;#52b788;#c9a84c"
                :dur "10s" :calcMode "spline"
                :keySplines "0.45 0 0.55 1;0.45 0 0.55 1"
                :repeatCount "indefinite"}]]
     [:stop {:offset "100%" :stop-color "#c9a84c" :stop-opacity "0"}
      [:animate {:attributeName "stop-color"
                 :values "#c9a84c;#52b788;#c9a84c"
                 :dur "10s" :calcMode "spline"
                 :keySplines "0.45 0 0.55 1;0.45 0 0.55 1"
                 :repeatCount "indefinite"}]]]))

(defn- place-svg-area [p d]
  [:path {:key          (:id p)
          :class        "place-area"
          :d            d
          :fill         (str "url(#grad-" (:id p) ")")
          :stroke       "#c9a84c"
          :stroke-width 3
          :filter       "url(#amorph)"
          :on-click     (place-click-handler p)}
   [:animate {:attributeName "stroke"
              :values        "#c9a84c;#52b788;#c9a84c"
              :dur           "10s" :calcMode "spline"
              :keySplines    "0.45 0 0.55 1;0.45 0 0.55 1"
              :repeatCount   "indefinite"}]])

(defn place-areas []
  (let [with-path (filter #(catmull-rom-path (:path %)) @api-places)
        with-path-ids (set (map :id with-path))
        without-path  (remove #(with-path-ids (:id %)) @api-places)]
    [:<>
     (for [p without-path] [place-dot p])
     [:svg {:style {:position "absolute" :left 0 :top 0
                    :width img-w :height img-h
                    :overflow "visible" :pointer-events "none"}}
      (into [:defs [amorph-filter]]
            (map place-radial-gradient with-path))
      (for [p with-path]
        [place-svg-area p (catmull-rom-path (:path p))])]]))

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
        node-ref   (atom nil)

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

        on-wheel
        (fn [e]
          (.preventDefault e)
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
                                   :y (- y (.-deltaY e))})))))

        on-touch-move
        (fn [e]
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
                (reset! transform (clamp-transform {:scale ns :x nx :y ny}))))))]

    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [vw (.-innerWidth js/window)
              vh (.-innerHeight js/window)
              s  (min (/ vw img-w) (/ vh img-h))
              tx (/ (- vw (* img-w s)) 2)
              ty (/ (- vh (* img-h s)) 2)]
          (reset! transform {:x tx :y ty :scale s}))
        (fetch-places!)
        (fetch-artists!)
        (fetch-acts!)
        (-> (js/fetch "/api/map-version")
            (.then #(.text %))
            (.then #(reset! map-ver %)))
        (when-let [node @node-ref]
          (.addEventListener node "wheel" on-wheel #js {:passive false})
          (.addEventListener node "touchmove" on-touch-move #js {:passive false})))

      :component-will-unmount
      (fn [_]
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
                (if (>= idx (count sim-route))
                  (swap! state assoc :sim-done? true)
                  (let [[lng lat] (nth sim-route idx)
                        to   [(lng->px lng) (lat->py lat)]
                        from (or @user-pos to)]
                    (reset! sim-idx idx)
                    (animate-px from to #(walk-step (inc idx))))))

              start-sim
              (fn []
                (when @watch-id (.clearWatch (.-geolocation js/navigator) @watch-id))
                (when @anim-frame (js/cancelAnimationFrame @anim-frame))
                (reset! sim-idx 0)
                (swap! state assoc :gps-status :found :sim-done? false)
                (let [[lng lat] (first sim-route)]
                  (reset! user-pos [(lng->px lng) (lat->py lat)]))
                (walk-step 1))

              stop-sim
              (fn []
                (when @anim-frame (js/cancelAnimationFrame @anim-frame))
                (reset! sim-idx 0)
                (reset! user-pos nil)
                (swap! state assoc :gps-status :idle :sim-done? false))]

          [:section#garden.map-section
           [:div.map-viewport
            {:ref            #(reset! node-ref %)
             :on-touch-start on-touch-start
             :on-touch-end   on-touch-end}
            [:div.map-world
             {:style {:transform (str "translate(" x "px," y "px) scale(" scale ")")
                      :transform-origin "0 0"
                      :width img-w :height img-h}}
             [:img {:src (str "/images/festival-map.png?v=" @map-ver)
                    :width img-w :height img-h
                    :draggable false
                    :style {:display "block" :user-select "none"}}]
             (when upos
               [:div.map-user-dot
                {:style {:position "absolute"
                         :left (first upos) :top (second upos)
                         :transform "translate(-50%,-50%)"}}])
             (place-areas)]]
           [place-modal]
           [artist-modal]

           (when dev?
             [:div.map-overlay__actions
              [:button.map-btn {:on-click start-gps}
               (case gps-status
                 :idle    "\u25ce Locate me"
                 :loading "Searching\u2026"
                 :found   (if inside? "\u2713 You are here" "\u26a0 Outside festival")
                 :error   "GPS unavailable"
                 "\u25ce Locate me")]
              [:button.map-btn.map-btn--sim {:on-click start-sim}
               (if sim-done? "\u21ba Again" "\u25b6 Simulate")]
              (when (and (pos? @sim-idx) (not sim-done?))
                [:button.map-btn.map-btn--stop {:on-click stop-sim} "\u25fc Stop"])])]))})))