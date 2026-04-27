(ns manas.frontend.app
  (:require [reagent.dom.client :as rdom]
            [manas.frontend.state :as state]
            [manas.frontend.views.map :as festival-map]))

(defonce root (atom nil))

(defn dev-mode? []
  (= (.-pathname js/window.location) "/dev"))

(defn render-app! []
  (when @root
    (rdom/render @root [festival-map/map-section {:dev? (dev-mode?)}])))

(defn start-app! []
  (reset! root (rdom/create-root (.getElementById js/document "app")))
  (render-app!))
