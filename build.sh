#!/bin/sh

rm -rf gh-pages
npm install
bower install
broccoli build gh-pages
rm -rf node_modules bower_components dist tmp bower.json Brocfile.js build.sh LICENSE package.json README.md app
git checkout master
cp -r gh-pages/* ./
rm -rf gh-pages
