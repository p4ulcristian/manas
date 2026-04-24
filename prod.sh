#!/usr/bin/env bash
cd "$(dirname "$0")"

PROFILE="${MANAS_PROFILE:-p4ulcristian}"
SOPS_FILE="secrets/${PROFILE}.sops.yaml"
SOPS=$(which sops 2>/dev/null || find /nix/store -maxdepth 4 -name "sops" -type f 2>/dev/null | head -1)

if [ -z "$SOPS" ]; then
  echo "Error: sops not found. Install it or add to PATH."
  exit 1
fi

if [ ! -f "$SOPS_FILE" ]; then
  echo "Error: $SOPS_FILE not found"
  exit 1
fi

echo "Decrypting secrets from $SOPS_FILE..."
SOPS_AGE_KEY_FILE="$HOME/.config/sops/age/keys.txt" \
  "$SOPS" --decrypt "$SOPS_FILE" \
  | sed -n 's/^\([A-Z][A-Z_0-9]*\): \(.*\)/\1=\2/p' > .env

set -a
source .env
set +a

echo "Building release JS..."
./node_modules/.bin/shadow-cljs release app

echo "Starting Manas [$PROFILE]..."
echo "- Web server on port $PORT"
echo "- CLJ nREPL  on port $NREPL_CLJ"
echo ""

clojure -M:dev -e "(do (require 'user) (user/start-nrepl) (user/go) @(promise))"
