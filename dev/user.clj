(ns user
  (:require [integrant.core :as ig]
            [integrant.repl :as ig-repl]
            [integrant.repl.state :as state]
            [system]
            [nrepl.server :as nrepl]))

(defonce nrepl-server (atom nil))

(defn- env-int [k default]
  (if-let [v (System/getenv k)] (Integer/parseInt v) default))

(ig-repl/set-prep! (fn []
                     (system/config {:port (env-int "PORT" 8090)})))

(defn start-nrepl []
  (let [port (env-int "NREPL_CLJ" 7892)]
    (when-not @nrepl-server
      (reset! nrepl-server (nrepl/start-server :port port))
      (println (str "nREPL server started on port " port))
      (spit ".nrepl-port" (str port)))))

(defn go []
  (start-nrepl)
  (ig-repl/go))

(defn reset []
  (ig-repl/reset))

(defn halt []
  (ig-repl/halt))
