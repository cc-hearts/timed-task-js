#!/bin/bash

docker rm -f puppeterr-interval
docker rmi -f puppeterr-interval:1.0.0

docker build -t puppeterr-interval:1.0.0 .

docker run --name puppeterr-interval -d puppeterr-interval:1.0.0