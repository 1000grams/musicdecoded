# Deploying from AWS CloudShell

These commands reproduce the steps used in `amplify.yml`. Copy and paste them into a CloudShell session after your changes are pushed to GitHub.

```bash
# clone the repo or pull updates
REPO=https://github.com/yourusername/decoded-music-landing-page.git
if [ ! -d decoded-music-landing-page ]; then
  git clone "$REPO"
  cd decoded-music-landing-page
else
  cd decoded-music-landing-page
  git pull
fi

# ensure Node.js 18 via nvm (already installed in CloudShell)
nvm install 18
nvm use 18

# clean caches and reinstall dependencies
npm cache clean --force
rm -rf node_modules
npm ci

# install Amplify CLI and push backend resources
npm install -g @aws-amplify/cli
bash scripts/verify_amplify_setup.sh
amplify push --yes

# build the front end and publish
cd decodedmusic-frontend
npm run build
amplify publish
```
