(ns manas.frontend.ui.cards
  (:require [manas.frontend.state :as state]))

(def ^:private placeholder-img
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23443322'/%3E%3Ctext x='20' y='26' text-anchor='middle' font-size='18' fill='%23998866'%3E%E2%97%8E%3C/text%3E%3C/svg%3E")

(defn place-img [place cls]
  [:img {:class cls
         :src   (or (:image-url place) placeholder-img)
         :alt   (:name place)}])

(defn act-card [{:keys [act artist past? on-artist-click]}]
  (let [scroll? (= (:id act) @state/modal-scroll-act-id)]
    [:div.act-card
     {:class (cond (= (:id act) @state/modal-selected-act-id) "act-card--selected"
            past? "act-card--past")
      :key   (:id act)
      :ref   (when scroll?
               (fn [el]
                 (when el
                   (reset! state/modal-scroll-act-id nil)
                   (js/setTimeout
                     (fn []
                       (when-let [body (.closest el ".place-modal__body")]
                         (let [el-top   (.. el getBoundingClientRect -top)
                               body-top (.. body getBoundingClientRect -top)
                               cur      (.-scrollTop body)
                               target   (-> (+ cur (- el-top body-top)) (- 60) (max 0))]
                           (.scrollTo body #js {:top target :behavior "smooth"}))))
                     300))))}
     [:span.act-card__time (:time act)]
     [:div.act-card__info
      [:span.act-card__name
       (cond-> {}
         on-artist-click (assoc :class "act-card__name--clickable"
                                :on-click on-artist-click))
       (:name artist)]
      (when (seq (:description artist))
        [:span.act-card__desc (:description artist)])]
     (when (:ms act)
       [:span.act-card__countdown
        (state/countdown (:ms act) @state/now-time)])]))

(defn artist-schedule-card [{:keys [act place]}]
  [:div.act-card {:key (:id act)}
   [:span.act-card__time
    (str (get state/day-labels (:date act) (:date act)) " " (:time act))]
   [:div.act-card__info
    [:span.act-card__name (:name place)]]
   [place-img place "act-card__stage-img"]])