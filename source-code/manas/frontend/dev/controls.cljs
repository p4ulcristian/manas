(ns manas.frontend.dev.controls)

(defn dev-controls [{:keys [gps-status inside? sim-done? sim-idx
                             on-locate on-simulate on-stop]}]
  [:div.dev-controls
   [:button.map-btn
    {:on-click on-locate}
    (case gps-status
      :loading "Searching\u2026"
      :found   (if inside? "\u2713 Here" "\u26a0 Outside")
      :error   "GPS error"
      "\u25ce Locate me")]
   [:button.map-btn.map-btn--sim
    {:on-click on-simulate}
    (if sim-done? "\u21ba Again" "\u25b6 Simulate")]
   (when (and (pos? sim-idx) (not sim-done?))
     [:button.map-btn.map-btn--stop {:on-click on-stop} "\u25fc Stop"])])