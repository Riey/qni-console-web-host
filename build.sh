git submodule init upstream &&
cd upstream/public &&
npm run build &&
cp -r assets ../.. &&
cp -r dist ../.. &&
cp -r index.html ../.. &&
cp -r src ../..

