(ns manas.frontend.ui.buttons)

(defn map-btn [attrs & children]
  (into [:button.map-btn attrs] children))

(defn nav-btn [{:keys [on-click active?]} label]
  [:button.nav-btn {:class (when active? "active") :on-click on-click} label])