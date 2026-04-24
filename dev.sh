#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

PROFILE="${MANAS_PROFILE:-p4ulcristian}"
SOPS_FILE="secrets/${PROFILE}.sops.yaml"
SOPS=$(which sops 2>/dev/null || find /nix/store -maxdepth 4 -name "sops" -type f 2>/dev/null | head -1)

if [ -z "$SOPS" ]; then
  echo "Error: sops not found."
  exit 1
fi

if [ ! -f "$SOPS_FILE" ]; then
  echo "Error: $SOPS_FILE not found"
  exit 1
fi

echo "Decrypting secrets from $SOPS_FILE..."
SOPS_AGE_KEY_FILE="$HOME/.config/sops/age/keys.txt" \
  "$SOPS" --decrypt "$SOPS_FILE" \
  | sed -n 's/^\([A-Z][A-Z_0-9]*\): \(.*\)/\1=\2/p' > .env.dev

set -a
source .env.dev
set +a

PID_FILE=".manas.pid"

if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE")
  if kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Stopping old manas process (PID $OLD_PID)..."
    kill "$OLD_PID"
    for i in $(seq 1 20); do
      sleep 0.5
      if ! lsof -i :"${PORT:-8090}" -sTCP:LISTEN -t >/dev/null 2>&1; then
        break
      fi
    done
  fi
  rm -f "$PID_FILE"
fi

rm -f .shadow-cljs/http.port
echo "Starting shadow-cljs watch..."
./node_modules/.bin/shadow-cljs watch app &

echo "Starting manas..."
echo "- Web server on port ${PORT:-8090}"
echo "- CLJ  nREPL  on port ${NREPL_CLJ:-7892}"
echo "- CLJS nREPL  on port ${NREPL_CLJS:-9631}"
echo "- Shadow HTTP on port ${MANAS_SHADOW_PORT:-9641}"
echo ""

clojure -M:dev -e "(do (require 'user) (user/start-nrepl) (user/go) @(promise))" &
echo $! > "$PID_FILE"
wait $(cat "$PID_FILE")
rm -f "$PID_FILE"
