#!/bin/sh

rm -rf gh-pages
npm install
bower install
node_modules/.bin/broccoli build gh-pages
rm -rf dist tmp bower.json Brocfile.js build.sh LICENSE package.json README.md app npm-debug.log
git checkout master
cp -r gh-pages/* ./
rm -rf gh-pages
