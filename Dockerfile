FROM node:16

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /opt/timed-task-js

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g pnpm

RUN pnpm install

RUN  pnpm build:engine

RUN cp /opt/timed-task-js/packages/config/config/app.yaml /opt/timed-task-js/packages/config/dist/config/app.yaml

EXPOSE 5782

CMD pnpm engine:prod