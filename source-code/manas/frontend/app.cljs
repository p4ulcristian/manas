(ns manas.frontend.app
  (:require [reagent.dom.client :as rdom]
            [manas.frontend.views.map :as festival-map]))

(defonce root (atom nil))

(defn render-app! []
  (when @root
    (rdom/render @root [festival-map/map-section])))

(defn start-app! []
  (reset! root (rdom/create-root (.getElementById js/document "app")))
  (render-app!))