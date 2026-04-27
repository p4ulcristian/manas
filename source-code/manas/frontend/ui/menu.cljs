(ns manas.frontend.ui.menu
  (:require [manas.frontend.state :as state]))

(defn bottom-nav []
  [:nav.bottom-menu
   [:button.nav-btn
    {:class    (when (= @state/active-nav :stages) "active")
     :on-click (fn []
                 (if (= @state/active-nav :stages)
                   (reset! state/active-nav nil)
                   (do (state/close-modal!)
                       (reset! state/active-nav :stages))))}
    "Stages"]
   [:button.nav-btn
    {:class    (when (= @state/active-nav :artists) "active")
     :on-click (fn []
                 (if (= @state/active-nav :artists)
                   (reset! state/active-nav nil)
                   (do (state/close-modal!)
                       (reset! state/active-nav :artists))))}
    "Artists"]
   (let [placing? @state/placing-home?]
     [:button.nav-btn
      {:class    (when placing? "placing")
       :on-click (cond
                   placing?           #(reset! state/placing-home? false)
                   @state/home-marker state/pulse-home!
                   :else              #(do (reset! state/active-nav nil)
                                           (reset! state/placing-home? true)))}
      (if placing? "Cancel" "Home")])])