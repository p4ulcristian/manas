(ns manas.backend.web.routes
  (:require [hiccup2.core :as h]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [ring.util.response :as response])
  (:import [java.util Base64 UUID]
           [java.io File]
           [java.nio.file Files Paths]))

(def ^:private project-root "/home/p4ulcristian/work/manas")
(def ^:private places-path  (str project-root "/resources/places.edn"))
(def ^:private artists-path (str project-root "/resources/artists.edn"))
(def ^:private acts-path      (str project-root "/resources/acts.edn"))
(def ^:private sim-route-path (str project-root "/resources/sim-route.edn"))

(defn- load-edn [path]
  (try (edn/read-string (slurp path))
       (catch Exception _ [])))

(defn- load-places  [] (load-edn places-path))
(defn- load-artists [] (load-edn artists-path))
(defn- load-acts    [] (load-edn acts-path))

(defn- save-places! [places]
  (io/make-parents places-path)
  (spit places-path (pr-str places)))

(defn- save-artists! [artists]
  (io/make-parents artists-path)
  (spit artists-path (pr-str artists)))

(defn- save-acts! [acts]
  (io/make-parents acts-path)
  (spit acts-path (pr-str acts)))

(defn- load-sim-route [] (load-edn sim-route-path))

(defn- save-sim-route! [route]
  (io/make-parents sim-route-path)
  (spit sim-route-path (pr-str route)))

(defn- parse-body [request]
  (json/parse-string (slurp (:body request)) true))

(defn- build-version []
  (try (clojure.string/trim (slurp (str project-root "/resources/version.txt")))
       (catch Exception _ "0")))

(defn- html-shell []
  (let [v (build-version)]
    (str "<!DOCTYPE html>"
         (h/html
          [:html {:lang "en"}
           [:head
            [:meta {:charset "UTF-8"}]
            [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
            [:title "Festival Map"]
            [:link {:rel "icon" :type "image/x-icon" :href (str "/favicon.ico?v=" v)}]
            [:link {:rel "icon" :type "image/png" :sizes "32x32" :href (str "/favicon-32x32.png?v=" v)}]
            [:link {:rel "icon" :type "image/png" :sizes "16x16" :href (str "/favicon-16x16.png?v=" v)}]
            [:link {:rel "apple-touch-icon" :sizes "180x180" :href (str "/favicon-180x180.png?v=" v)}]
            [:link {:rel "stylesheet" :href (str "/css/main.css?v=" v)}]]
           [:body
            [:div#app]
            [:script {:src (str "/js/core/main.js?v=" v)}]]]))))

(defn- upload-page []
  (str "<!DOCTYPE html>"
       (h/html
        [:html {:lang "en"}
         [:head
          [:meta {:charset "UTF-8"}]
          [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
          [:title "Upload Festival Map"]
          [:style "body{font-family:sans-serif;max-width:600px;margin:60px auto;padding:0 20px}
                   h1{font-size:1.4rem}
                   #status{margin-top:16px;font-size:.9rem}
                   img{margin-top:16px;max-width:100%;border-radius:8px}"]]
         [:body
          [:h1 "Upload Festival Map"]
          [:input {:type "file" :id "picker" :accept "image/*"}]
          [:div#status]
          [:img#preview {:style "display:none"}]
          [:script
           (h/raw
            "document.getElementById('picker').addEventListener('change', function(e) {
               var file = e.target.files[0];
               if (!file) return;
               var status = document.getElementById('status');
               var preview = document.getElementById('preview');
               status.textContent = 'Reading...';
               var reader = new FileReader();
               reader.onload = function(ev) {
                 var b64 = ev.target.result;
                 status.textContent = 'Uploading...';
                 fetch('/upload-festival-map', {
                   method: 'POST',
                   headers: {'Content-Type': 'application/json'},
                   body: JSON.stringify({image: b64})
                 })
                 .then(function(r){ return r.json(); })
                 .then(function(data) {
                   if (data.url) {
                     status.textContent = 'Done! Saved to: ' + data.url;
                     preview.src = data.url + '?t=' + Date.now();
                     preview.style.display = 'block';
                   } else {
                     status.textContent = 'Error: ' + (data.error || 'unknown');
                   }
                 })
                 .catch(function(err){ status.textContent = 'Error: ' + err; });
               };
               reader.readAsDataURL(file);
             });"
            )]]])
))

(defn- json-response [body & {:keys [status] :or {status 200}}]
  {:status  status
   :headers {"Content-Type" "application/json" "Access-Control-Allow-Origin" "*"}
   :body    (json/generate-string body)})

(defn- handle-get-places    [_] (json-response (load-places)))
(defn- handle-get-artists   [_] (json-response (load-artists)))
(defn- handle-get-acts      [_] (json-response (load-acts)))
(defn- handle-get-sim-route [_] (json-response (load-sim-route)))

(defn- handle-put-sim-route [request]
  (try
    (let [body  (parse-body request)
          route (:route body)]
      (save-sim-route! route)
      (json-response {:ok true}))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-post-artist [request]
  (try
    (let [body   (parse-body request)
          artist (merge {:id (str (UUID/randomUUID)) :name "" :description ""}
                        (select-keys body [:id :name :description]))
          all    (conj (load-artists) artist)]
      (save-artists! all)
      (json-response artist :status 201))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-put-artist [request id]
  (try
    (let [body     (parse-body request)
          artists  (load-artists)
          updated  (mapv (fn [a]
                           (if (= (:id a) id)
                             (merge a (select-keys body [:name :description]))
                             a))
                         artists)]
      (if (some #(= (:id %) id) artists)
        (do (save-artists! updated)
            (json-response (first (filter #(= (:id %) id) updated))))
        (json-response {:error "Not found"} :status 404)))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-delete-artist [id]
  (let [updated (vec (remove #(= (:id %) id) (load-artists)))]
    (save-artists! updated)
    (json-response {:ok true})))

(defn- handle-post-act [request]
  (try
    (let [body (parse-body request)
          act  (merge {:id (str (UUID/randomUUID)) :artist-id "" :place-id "" :date "" :time ""}
                      (select-keys body [:artist-id :place-id :date :time]))
          all  (conj (load-acts) act)]
      (save-acts! all)
      (json-response act :status 201))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-put-act [request id]
  (try
    (let [body    (parse-body request)
          acts    (load-acts)
          updated (mapv (fn [a]
                          (if (= (:id a) id)
                            (merge a (select-keys body [:artist-id :place-id :date :time]))
                            a))
                        acts)]
      (if (some #(= (:id %) id) acts)
        (do (save-acts! updated)
            (json-response (first (filter #(= (:id %) id) updated))))
        (json-response {:error "Not found"} :status 404)))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-delete-act [id]
  (let [updated (vec (remove #(= (:id %) id) (load-acts)))]
    (save-acts! updated)
    (json-response {:ok true})))

(defn- handle-post-place [request]
  (try
    (let [body  (parse-body request)
          place (merge {:id (str (UUID/randomUUID)) :name "" :type "other" :icon "O" :path [] :description ""}
                       (select-keys body [:name :type :icon :path :description]))
          all   (conj (load-places) place)]
      (save-places! all)
      (json-response place :status 201))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-put-place [request id]
  (try
    (let [body    (parse-body request)
          places  (load-places)
          updated (mapv (fn [p]
                          (if (= (:id p) id)
                            (merge p (select-keys body [:name :type :icon :path :description :image-url]))
                            p))
                        places)]
      (if (some #(= (:id %) id) places)
        (do (save-places! updated)
            (json-response (first (filter #(= (:id %) id) updated))))
        (json-response {:error "Not found"} :status 404)))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-upload-place-image [request id]
  (try
    (let [body  (json/parse-string (slurp (:body request)) true)
          b64   (clojure.string/replace (:image body) #"^data:image/[^;]+;base64," "")
          ext   (or (second (re-find #"^data:image/([^;]+);" (:image body))) "png")
          bytes (.decode (Base64/getDecoder) b64)
          dir   (File. (str project-root "/resources/public/images/places"))
          _     (.mkdirs dir)
          fname (str id "." ext)
          path  (Paths/get (str project-root "/resources/public/images/places/" fname) (into-array String []))
          _     (Files/write path bytes (into-array java.nio.file.OpenOption []))
          url   (str "/images/places/" fname)
          places  (load-places)
          updated (mapv #(if (= (:id %) id) (assoc % :image-url url) %) places)]
      (save-places! updated)
      (json-response {:url url}))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn- handle-delete-place [id]
  (let [updated (vec (remove #(= (:id %) id) (load-places)))]
    (save-places! updated)
    (json-response {:ok true})))

(defn- serve-file [rel-path]
  (let [path (first (clojure.string/split rel-path #"\?"))
        f    (java.io.File. (str project-root "/resources/public" path))]
    (if (.exists f)
      {:status  200
       :headers {"Content-Type" (or (java.nio.file.Files/probeContentType (.toPath f)) "application/octet-stream")}
       :body    f}
      {:status 404 :headers {} :body "Not found"})))

(defn- handle-upload-festival-map [request]
  (try
    (let [body    (json/parse-string (slurp (:body request)) true)
          b64     (:image body)
          b64     (clojure.string/replace b64 #"^data:image/[^;]+;base64," "")
          bytes   (.decode (Base64/getDecoder) b64)
          dir     (File. (str project-root "/resources/public/images"))
          _       (.mkdirs dir)
          path    (Paths/get (str project-root "/resources/public/images/festival-map.png") (into-array String []))]
      (Files/write path bytes (into-array java.nio.file.OpenOption []))
      (json-response {:url "/images/festival-map.png"}))
    (catch Exception e
      (json-response {:error (.getMessage e)} :status 400))))

(defn handler [request]
  (let [uri    (:uri request)
        method (:request-method request)]
    (cond
      (or (= uri "/") (= uri "/dev"))
      {:status 200 :headers {"Content-Type" "text/html; charset=utf-8"} :body (html-shell)}

      (and (= uri "/upload") (= method :get))
      {:status 200 :headers {"Content-Type" "text/html; charset=utf-8"} :body (upload-page)}

      (and (= uri "/api/map-version") (= method :get))
      {:status  200
       :headers {"Content-Type" "text/plain" "Access-Control-Allow-Origin" "*"}
       :body    (str (.lastModified (clojure.java.io/file "resources/public/images/festival-map.png")))}

      (and (= uri "/upload-festival-map") (= method :post))
      (handle-upload-festival-map request)

      (and (= uri "/admin") (= method :get))
      {:status 200 :headers {"Content-Type" "text/html; charset=utf-8"}
       :body (slurp "/home/p4ulcristian/work/manas/resources/public/admin.html")}

      (and (= uri "/api/places") (= method :get))
      (handle-get-places request)

      (and (= uri "/api/places") (= method :post))
      (handle-post-place request)

      (and (clojure.string/starts-with? uri "/api/places/") (= method :put))
      (handle-put-place request (subs uri (count "/api/places/")))

      (and (re-matches #"/api/places/[^/]+/image" uri) (= method :post))
      (handle-upload-place-image request (second (re-find #"/api/places/([^/]+)/image" uri)))

      (and (clojure.string/starts-with? uri "/api/places/") (= method :delete))
      (handle-delete-place (subs uri (count "/api/places/")))

      (and (= uri "/api/artists") (= method :get))
      (handle-get-artists request)

      (and (= uri "/api/artists") (= method :post))
      (handle-post-artist request)

      (and (clojure.string/starts-with? uri "/api/artists/") (= method :put))
      (handle-put-artist request (subs uri (count "/api/artists/")))

      (and (clojure.string/starts-with? uri "/api/artists/") (= method :delete))
      (handle-delete-artist (subs uri (count "/api/artists/")))

      (and (= uri "/api/acts") (= method :get))
      (handle-get-acts request)

      (and (= uri "/api/sim-route") (= method :get))
      (handle-get-sim-route request)

      (and (= uri "/api/sim-route") (= method :put))
      (handle-put-sim-route request)

      (and (= uri "/api/acts") (= method :post))
      (handle-post-act request)

      (and (clojure.string/starts-with? uri "/api/acts/") (= method :put))
      (handle-put-act request (subs uri (count "/api/acts/")))

      (and (clojure.string/starts-with? uri "/api/acts/") (= method :delete))
      (handle-delete-act (subs uri (count "/api/acts/")))

      (clojure.string/starts-with? uri "/images/")
      (serve-file uri)

      (clojure.string/starts-with? uri "/css/")
      (serve-file uri)

      (clojure.string/starts-with? uri "/js/")
      (serve-file uri)

      (re-matches #"/favicon.*" uri)
      (serve-file uri)

      (clojure.string/starts-with? uri "/fonts/")
      (serve-file uri)

      :else
      (response/not-found "Not found"))))