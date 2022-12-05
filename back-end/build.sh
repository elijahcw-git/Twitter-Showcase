#!/usr/bin/env bash
# exit on error
set -o errexit

npm i --prefix ./../front-end
npm run build --prefix ./../front-end
mv ./../front-end/build ./

pip --install --upgrade pip
pip install -r requirements.txt