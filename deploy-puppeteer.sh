#!/bin/bash

docker rm -f puppeterr-interval
docker rmi -f puppeterr-interval:1.0.0

docker build -f ./packages/puppeteer/Dockerfile -t puppeterr-interval:1.0.0 .

# --cap-add=SYS_ADMIN
docker run --privileged --name puppeterr-interval -d puppeterr-interval:1.0.0