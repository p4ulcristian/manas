(ns manas.frontend.ui.modals
  (:require [manas.frontend.state :as state]
            [manas.frontend.ui.cards :as cards]
            [clojure.string :as str]))

(def ^:private day-labels state/day-labels)

;; ── Shell ─────────────────────────────────────────────────────────
(defn- modal-shell [{:keys [on-close extra-class]} & children]
  [:div.place-modal
   {:class    (str/join " " (remove nil? [extra-class (when @state/modal-closing "closing")]))
    :on-click on-close}
   (into [:div.place-modal__sheet {:on-click #(.stopPropagation %)}
          [:button.place-modal__close {:on-click on-close} "\u2715"]]
         children)])

;; ── Now line ──────────────────────────────────────────────────────
(defn- now-line []
  [:div.now-line
   {:ref #(when %
            (js/setTimeout
              (fn []
                (when-let [body (.closest % ".place-modal__body")]
                  (let [el-top   (.. % getBoundingClientRect -top)
                        body-top (.. body getBoundingClientRect -top)
                        body-bot (.-bottom (.getBoundingClientRect body))
                        el-bot   (.-bottom (.getBoundingClientRect %))]
                    (when (or (< el-top body-top) (> el-bot body-bot))
                      (.scrollTo body #js {:top (+ (.-scrollTop body)
                                                   (- el-top body-top)
                                                   -20)
                                           :behavior "smooth"})))))
              120))}
   [:span.now-line__label
    (let [d (js/Date. @state/now-time)
          h (.getHours d)
          m (.getMinutes d)]
      (str (when (< h 10) "0") h ":" (when (< m 10) "0") m))]])

;; ── Back link ─────────────────────────────────────────────────────
(defn- back-link [label on-click]
  [:button.place-modal__back {:on-click on-click} label])

;; ── Modal header ──────────────────────────────────────────────────
(defn- modal-header [& children]
  (into [:div.place-modal__header] children))

(defn- header-text [& children]
  (into [:div.place-modal__header-text] children))

;; ── Modal body ────────────────────────────────────────────────────
(defn- modal-body [& children]
  (into [:div.place-modal__body] children))

;; ── Day tabs ──────────────────────────────────────────────────────
(defn- day-tabs [dates active on-select]
  [:div.place-modal__days
   (for [d dates]
     [:div.place-modal__day-tab
      {:key      d
       :class    (when (= d active) "active")
       :on-click (fn [e] (.stopPropagation e) (on-select d))}
      [:span (get day-labels d d)]
      [:span.place-modal__day-date (last (str/split d #"-"))]])])

;; ── Act list ──────────────────────────────────────────────────────
(defn- act-list [place-id day]
  (let [artist-map (->> @state/api-artists (map (juxt :id identity)) (into {}))
        day-acts   (->> @state/api-acts
                        (filter #(and (= (:place-id %) place-id) (= (:date %) day)))
                        (sort-by #(let [[h] (map js/parseInt (.split (:time %) ":"))]
                                    (if (< h 7) (+ h 24) h))))
        now        @state/now-time
        dated      (mapv #(assoc % :ms (state/act->ms day (:time %))) day-acts)
        past       (filterv #(and (:ms %) (< (:ms %) now)) dated)
        future     (filterv #(or (nil? (:ms %)) (>= (:ms %) now)) dated)]
    (if (seq day-acts)
      [:div.act-card-list
       (for [a past]
         [cards/act-card {:act a :artist (get artist-map (:artist-id a))
                          :past? true :on-artist-click nil}])
       [now-line]
       (for [a future]
         [cards/act-card {:act a :artist (get artist-map (:artist-id a))
                          :past? false
                          :on-artist-click (fn [e]
                                             (.stopPropagation e)
                                             (reset! state/modal-artist
                                                     (get artist-map (:artist-id a))))}])]
      [:div.no-acts "Lineup TBA"])))

;; ── Place modal ───────────────────────────────────────────────────
(defn place-modal []
  (when @state/modal-place
    (when-let [p @state/place-display]
      (let [place-id (:id p)
            dates    (->> @state/api-acts
                          (filter #(= (:place-id %) place-id))
                          (map :date) distinct sort)
            active   (or @state/modal-day (first dates))
            anim-cls (case @state/place-content-anim
                       :out "place-content--out"
                       :in  "place-content--in"
                       "")]
        [modal-shell {:on-close state/close-modal!}
         [:div.place-content {:class anim-cls}
          [modal-header
           [cards/place-img p "place-modal__img"]
           [header-text
            [back-link "\u2190 Stages"
             (fn [] (reset! state/modal-day nil) (state/close-modal!) (reset! state/active-nav :stages))]
            [:span.place-modal__name (:name p)]]]
          [modal-body
           (when (seq (:description p))
             [:div.place-modal__place-desc (:description p)])
           (when (seq dates)
             [day-tabs dates active #(reset! state/modal-day %)])
           [act-list place-id active]]]]))))

;; ── Artist modal ─────────────────────────────────────────────────
(defn artist-modal []
  (when-let [a @state/modal-artist]
    (let [place-map (->> @state/api-places (map (juxt :id identity)) (into {}))
          a-acts    (->> @state/api-acts
                         (filter #(= (:artist-id %) (:id a)))
                         (sort-by #(str (:date %) (:time %))))]
      [modal-shell {:on-close state/close-modal! :extra-class "artist-modal"}
       [modal-header
        [header-text
         [back-link "\u2190 All artists"
          (fn [] (state/close-modal!) (reset! state/active-nav :artists))]
         [:span.place-modal__name (:name a)]]]
       [modal-body
        [:div.place-modal__artist-bio (:description a)]
        [:div.act-card-list
         (if (seq a-acts)
           (for [act a-acts]
             ^{:key (:id act)}
             [:div.act-card-row
              {:on-click (fn [e]
                           (.stopPropagation e)
                           (let [place (get place-map (:place-id act))]
                             (reset! state/modal-scroll-act-id (:id act))
                             (reset! state/modal-selected-act-id (:id act))
                             (reset! state/modal-artist nil)
                             (reset! state/modal-day (:date act))
                             (state/switch-place! place)))}
              [cards/artist-schedule-card {:act act :place (get place-map (:place-id act))}]])
           [:div.no-acts "No performances scheduled"])]]])))
