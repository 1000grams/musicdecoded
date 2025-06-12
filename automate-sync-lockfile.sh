#!/bin/bash
# automate-sync-lockfile.sh
# This script syncs package-lock.json with package.json for the front-end

set -e

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT" || exit 1

echo "➡️ Pulling latest changes"
git pull origin main

FRONTEND_DIR="decodedmusic-frontend"
cd "$FRONTEND_DIR" || exit 1

echo "➡️ Removing old lockfile and node_modules"
rm -rf node_modules package-lock.json

echo "➡️ Reinstalling dependencies"
npm install

echo "➡️ Verifying build"
npm run build

cd "$REPO_ROOT"
echo "➡️ Committing updated lockfile"
git add "$FRONTEND_DIR/package.json" "$FRONTEND_DIR/package-lock.json"
git commit -m "chore: sync package-lock.json with package.json"

echo "➡️ Pushing changes"
git push

echo "✅ Lockfile synchronized"
