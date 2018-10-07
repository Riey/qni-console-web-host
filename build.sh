git pull --recurse-submodules &&
cd upstream &&
npm run build &&
cp -r public .. &&
cp -r ./src ..
