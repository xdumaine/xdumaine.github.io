#!/bin/sh

./build.sh
git commit -am "latest changes YOLO"
git push origin master
git checkout develop
