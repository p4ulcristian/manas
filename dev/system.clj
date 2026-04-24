(ns system
  (:require [integrant.core :as ig]
            [manas.backend.server :as server]))

(defmethod ig/init-key :manas/server [_ opts]
  (server/start! opts))

(defmethod ig/halt-key! :manas/server [_ stop-fn]
  (when stop-fn (stop-fn)))

(defn config [{:keys [port] :or {port 8080}}]
  {:manas/server {:port port}})
