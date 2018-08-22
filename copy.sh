#!/bin/bash
rm -r ./player
cp -r ../H5Player/dist/ ./player
git add *
git commit -am '1'
git push
echo 'ok'
