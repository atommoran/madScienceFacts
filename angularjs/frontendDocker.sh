#!/bin/bash
docker rm -f Factend
echo "const AppConstants = {

  api: 'http://<YOUR_API_ADDRESS_HERE>:5000',

  appName: 'Sir\'s Mad Science Facts',
};

export default AppConstants;" >src/js/config/app.constants.js

docker build -t factend:latest -f Dockerfile.angularjs .
docker run -itd --name Factend -p 80:80 factend
