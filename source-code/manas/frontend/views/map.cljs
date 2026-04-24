(ns manas.frontend.views.map
  (:require [reagent.core :as r]))

;; ── Image georeferencing ──────────────────────────────────────────
;; Image: 1792x2048px covering exactly these bounds
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

;; ── API places state ─────────────────────────────────────────────
(defonce api-places    (r/atom []))
(defonce modal-place   (r/atom nil))
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

;; ── Place modal sheet ─────────────────────────────────────────────
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

(defn- modal-acts [schedule day]
  (let [entry  (first (filter #(= (:date %) day) schedule))
        acts   (:acts entry)
        now    @now-time
        dated  (mapv #(assoc % :ms (act->ms day (:time %))) acts)
        past   (filterv #(and (:ms %) (< (:ms %) now)) dated)
        future (filterv #(or (nil? (:ms %)) (>= (:ms %) now)) dated)
]
    (if (seq acts)
      [:div.place-modal__acts
       (for [a past]
         [:div.place-modal__act.past {:key (:name a)}
          [:span.place-modal__act-time (:time a)]
          [:div.place-modal__act-info
           [:span.place-modal__act-name (:name a)]
           (when (seq (:description a)) [:span.place-modal__act-desc (:description a)])]])
       [:div.place-modal__now-line
        {:ref #(when % (js/setTimeout (fn [] (.scrollIntoView % #js {:behavior "smooth" :block "nearest"})) 120))}
        [:span.place-modal__now-label
        (let [d (js/Date. @now-time)
              h (.getHours d)
              m (.getMinutes d)]
          (str (when (< h 10) "0") h ":" (when (< m 10) "0") m))]]
       (for [a future]
         [:div.place-modal__act {:key (:name a)}
          [:span.place-modal__act-time (:time a)]
          [:div.place-modal__act-info
           [:span.place-modal__act-name (:name a)]
           (when (seq (:description a)) [:span.place-modal__act-desc (:description a)])]
          (when (:ms a) [:span.place-modal__act-countdown (countdown (:ms a) now)])])]
      [:div.place-modal__no-acts "Lineup TBA"])))

(defn place-modal []
  (when-let [p @modal-place]
    (let [schedule (or (:schedule p) [])
          active   (or @modal-day (some-> schedule first :date))]
      [:div.place-modal
       {:class    (when @modal-closing "closing")
        :on-click close-modal!}
       [:div.place-modal__sheet
        {:on-click #(.stopPropagation %)}
        [:button.place-modal__close {:on-click close-modal!} "✕"]
        [:div.place-modal__header
         [:span.place-modal__icon (or (:icon p) "◉")]
         [:span.place-modal__name (:name p)]]
        [:div.place-modal__days
         (for [{:keys [date label]} schedule]
           [:div.place-modal__day-tab
            {:key     date
             :class   (when (= date active) "active")
             :on-click (fn [e] (.stopPropagation e) (reset! modal-day date))}
            label])]
        (modal-acts schedule active)]])))

;; ── API place buttons (pixel-positioned) ─────────────────────────
(defn place-buttons []
  (for [p @api-places]
    [:div.place-btn
     {:key      (:id p)
      :style    {:position "absolute"
                 :left     (:x p)
                 :top      (:y p)
                 :transform "translate(-50%,-50%)"}
      :on-click (fn [e] (.stopPropagation e) (reset! modal-day nil) (reset! modal-place p))}
     [:span.sparkle.s1]
     [:span.sparkle.s2]
     [:span.sparkle.s3]
     [:span.sparkle.s4]
     [:span.sparkle.s5]
     [:span.sparkle.s6]]))

;; ── Transform clamping ───────────────────────────────────────────
;; Keeps the map on screen: if image fills viewport, allow full pan;
;; if image is smaller than viewport, center it.
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
(defn map-section []
  (let [state      (r/atom {:gps-status :idle :inside? false :sim-done? false})
        transform  (r/atom {:x 0 :y 0 :scale 1})
        user-pos   (r/atom nil)
        map-ver    (r/atom "0")
        ;; touch tracking (plain atoms — no re-render needed)
        touch-ref  (atom {:dragging false :pinching false
                          :last-x 0 :last-y 0
                          :pinch-dist 0 :pinch-cx 0 :pinch-cy 0})
        watch-id   (atom nil)
        sim-idx    (atom 0)
        anim-frame (atom nil)
        node-ref   (atom nil)

        ;; Shared animation: smoothly move user-pos from pixel [fx fy] to [tx ty].
        ;; Calls on-done when complete. Cancels any running animation first.
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
      (fn []
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
             ;; User dot
             (when upos
               [:div.map-user-dot
                {:style {:position "absolute"
                         :left (first upos) :top (second upos)
                         :transform "translate(-50%,-50%)"}}])
             ;; API place buttons
             (place-buttons)]]
           [place-modal]

           [:div.map-overlay__actions
            [:button.map-btn {:on-click start-gps}
             (case gps-status
               :idle    "◎ Locate me"
               :loading "Searching…"
               :found   (if inside? "✓ You are here" "⚠ Outside festival")
               :error   "GPS unavailable"
               "◎ Locate me")]
            [:button.map-btn.map-btn--sim {:on-click start-sim}
             (if sim-done? "↺ Again" "▶ Simulate")]
            (when (and (pos? @sim-idx) (not sim-done?))
              [:button.map-btn.map-btn--stop {:on-click stop-sim} "◼ Stop"])]]))})))
