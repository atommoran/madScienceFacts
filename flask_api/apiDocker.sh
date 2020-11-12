#!/bin/bash
docker rm -f Bactend
docker build -t bactend:latest -f Dockerfile.flask .
docker run -itd --name Bactend -p 5000:5000 -e L2=$1 -e L2P=$2 -e Teachers=$3 bactend
