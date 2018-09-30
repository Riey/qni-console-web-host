git submodule update --init --recursive &&
cd upstream &&
npm run build &&
cp -r public .. &&
cp -r ./src ..

