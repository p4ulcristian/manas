(ns manas.frontend.ui.panels.artists
  (:require [manas.frontend.state :as state]))

(defn artists-panel []
  (when (= @state/active-nav :artists)
    [:div.place-modal
     {:style {:z-index 995}
      :on-click #(reset! state/active-nav nil)}
     [:div.nav-panel__sheet
      {:on-click #(.stopPropagation %)}
      [:button.place-modal__close {:on-click #(reset! state/active-nav nil)} "\u2715"]
      [:div.nav-panel__title "Artists"]
      [:div.stages-list
       (for [a (sort-by :name @state/api-artists)]
         ^{:key (:id a)}
         [:div.stage-row
          {:on-click (fn []
                       (reset! state/active-nav nil)
                       (reset! state/modal-artist a))}
          [:div.artist-row__avatar
           [:span (-> (:name a) (subs 0 1) clojure.string/upper-case)]]
          [:div.stage-row__info
           [:span.stage-row__name (:name a)]
           (when (seq (:description a))
             [:span.stage-row__desc (:description a)])]])]]]))
