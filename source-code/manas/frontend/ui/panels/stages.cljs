(ns manas.frontend.ui.panels.stages
  (:require [manas.frontend.state :as state]
            [manas.frontend.ui.cards :as cards]))

(defn stages-panel []
  (when (= @state/active-nav :stages)
    [:div.place-modal
     {:style {:z-index 995}
      :on-click #(reset! state/active-nav nil)}
     [:div.nav-panel__sheet
      {:on-click #(.stopPropagation %)}
      [:button.place-modal__close {:on-click #(reset! state/active-nav nil)} "\u2715"]
      [:div.nav-panel__title "Stages"]
      [:div.stages-list
       (for [p @state/api-places]
         ^{:key (:id p)}
         [:div.stage-row
          {:on-click (fn []
                       (reset! state/active-nav nil)
                       (reset! state/modal-day nil)
                       (state/switch-place! p))}
          [cards/place-img p "stage-row__img"]
          [:div.stage-row__info
           [:span.stage-row__name (:name p)]
           (when (seq (:description p))
             [:span.stage-row__desc (:description p)])]])]]]))