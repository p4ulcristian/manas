(ns manas.backend.server
  (:require [org.httpkit.server :as http]
            [manas.backend.web.routes :as routes])
  (:gen-class))

(defonce ^:private server-atom (atom nil))

(defn start! [{:keys [port] :or {port 8080}}]
  (println (str "Manas Festival: http://localhost:" port))
  (let [stop-fn (http/run-server #'routes/handler {:port port :thread 8})]
    (reset! server-atom stop-fn)
    stop-fn))

(defn stop! []
  (when-let [stop-fn @server-atom]
    (stop-fn)
    (reset! server-atom nil)))

(defn -main [& _args]
  (start! {:port (Integer/parseInt (or (System/getenv "PORT") "8090"))})
  @(promise))
