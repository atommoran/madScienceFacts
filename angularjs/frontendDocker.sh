#!/bin/bash
docker rm -f Factend
echo "const AppConstants = {

  api: 'http://192.168.5.228:5000',

  appName: 'Mr Moran\'s Mad Science Facts',
};

export default AppConstants;" >src/js/config/app.constants.js

docker build -t factend:latest -f Dockerfile.angularjs .
docker run -itd --name Factend -p 80:80 factend
