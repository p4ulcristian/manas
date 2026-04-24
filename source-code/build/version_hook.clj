(ns build.version-hook)

(defn- random-version []
  (apply str (repeatedly 8 #(nth "abcdefghijklmnopqrstuvwxyz0123456789" (rand-int 36)))))

(defn hook
  {:shadow.build/stage :configure}
  [build-state & _]
  (let [v (random-version)]
    (spit "resources/version.txt" v)
    (println (str "Build version: " v))
    build-state))