(ns manas.frontend.state
  (:require [reagent.core :as r]))

;; ── API data ─────────────────────────────────────────────────────
(defonce api-places  (r/atom []))
(defonce api-artists (r/atom []))
(defonce api-acts    (r/atom []))

(defn fetch-places! []
  (-> (js/fetch "/api/places")
      (.then #(.json %))
      (.then #(reset! api-places (js->clj % :keywordize-keys true)))))

(defn fetch-artists! []
  (-> (js/fetch "/api/artists")
      (.then #(.json %))
      (.then #(reset! api-artists (js->clj % :keywordize-keys true)))))

(defn fetch-acts! []
  (-> (js/fetch "/api/acts")
      (.then #(.json %))
      (.then #(reset! api-acts (js->clj % :keywordize-keys true)))))

;; ── Time ─────────────────────────────────────────────────────────
(defonce now-time (r/atom (js/Date.now)))
(.setInterval js/window #(reset! now-time (js/Date.now)) 30000)

(defn act->ms [date-str time-str]
  (when (seq time-str)
    (let [[h m] (map js/parseInt (.split time-str ":"))
          d     (js/Date. date-str)
          h'    (if (< h 7) (+ h 24) h)]
      (.setHours d h' m 0 0))))

(defn countdown [ms now]
  (let [diff-m (/ (- ms now) 60000)
        d      (Math/floor (/ diff-m 1440))
        h      (Math/floor (mod (/ diff-m 60) 24))
        m      (Math/round (mod diff-m 60))]
    (cond
      (pos? d) (str d "d " h "h")
      (pos? h) (str h "h " m "m")
      :else    (str m "min"))))

(def day-labels
  {"2026-07-08" "Wed" "2026-07-09" "Thu" "2026-07-10" "Fri"
   "2026-07-11" "Sat" "2026-07-12" "Sun" "2026-07-13" "Mon"})

;; ── Nav state ───────────────────────────────────────────────
(defonce active-nav (r/atom nil))

;; ── Home marker ──────────────────────────────────────────────
(defonce home-marker
  (r/atom (when-let [raw (try (js/localStorage.getItem "manas-home") (catch :default _ nil))]
            (when raw (js->clj (js/JSON.parse raw) :keywordize-keys true)))))

(defonce placing-home?  (r/atom false))
(defonce home-pulsing?  (r/atom false))

(defn pulse-home! []
  (reset! home-pulsing? true)
  (js/setTimeout #(reset! home-pulsing? false) 1500))

(defn set-home-marker! [x y]
  (let [m {:x x :y y}]
    (reset! home-marker m)
    (try (js/localStorage.setItem "manas-home" (js/JSON.stringify (clj->js m)))
         (catch :default _ nil))
    (reset! placing-home? false)))

(defn clear-home-marker! []
  (reset! home-marker nil)
  (try (js/localStorage.removeItem "manas-home")
       (catch :default _ nil)))

;; ── Modal state ───────────────────────────────────────────────────────
(defonce modal-place   (r/atom nil))
(defonce modal-artist  (r/atom nil))
(defonce modal-day     (r/atom nil))
(defonce modal-closing     (r/atom false))
(defonce place-display      (r/atom nil))
(defonce place-content-anim (r/atom nil))

(defn switch-place! [new-place]
  (if (nil? @place-display)
    (do (reset! place-display new-place)
        (reset! modal-place new-place))
    (do (reset! place-content-anim :out)
        (js/setTimeout
          (fn []
            (reset! place-display new-place)
            (reset! modal-place new-place)
            (reset! place-content-anim :in)
            (js/setTimeout #(reset! place-content-anim nil) 350))
          220))))
(defonce modal-scroll-act-id    (r/atom nil))
(defonce modal-selected-act-id  (r/atom nil))

(defn close-modal! []
  (reset! modal-closing true)
  (js/setTimeout (fn []
                   (reset! modal-place nil)
                   (reset! modal-artist nil)
                   (reset! modal-selected-act-id nil)
                   (reset! modal-closing false)
                   (reset! place-display nil)
                   (reset! place-content-anim nil)) 240))
