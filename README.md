# Manas Festival Map

An interactive map for the Manas festival at Lengyeltóti, Hungary. Visitors
see an illustrated festival map with their live GPS position on it, an
"inside the festival" indicator, the places on site and the timetable of acts
and artists.

**Status: retired.** It is no longer hosted anywhere; this repository is kept
as an archive.

## What is in it

- `source-code/manas/frontend` — ClojureScript (shadow-cljs, Reagent) map UI.
  The map image is georeferenced in `views/map.cljs` (image bounds and the
  festival boundary polygon), so GPS coordinates land on the drawing.
- `source-code/manas/backend` — a small Clojure web server: serves the app and
  a JSON API (`/api/places`, `/api/acts`, `/api/artists`, `/api/sim-route`,
  `/api/map-version`), plus `/admin` for editing content and uploading place
  images or a new festival map.
- `resources/*.edn` — the content itself: places, acts, artists and a
  simulated walking route used to test GPS tracking without being on site.

## Running it

Configuration comes from a sops-encrypted file in `secrets/` (ports and the
shadow-cljs devtools URL), decrypted to a git-ignored `.env` at start.

    ./dev.sh    # shadow-cljs watch + backend with nREPL
    ./prod.sh   # release build + backend
