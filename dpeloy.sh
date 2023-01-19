#!/bin/bash

./prisma.sh

docker rm -f task-time-js

docker rmi -f task-time-js:1.0.0

docker build -t task-time-js:1.0.0 .

docker run --name task-time-js -d task-time-js:1.0.0