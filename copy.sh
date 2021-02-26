#!/bin/bash
# rm -r ./player
cp -r ../H5Player/dist/ ./player
git add *
git commit -am "+ $now"
git push
echo 'push success '$now
