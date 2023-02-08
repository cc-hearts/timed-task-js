FROM ghcr.io/puppeteer/puppeteer:latest

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /opt/timed-task-js

COPY . .

USER root

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g pnpm

RUN pnpm install

# RUN pnpm --filter @repo/utils install
# RUN pnpm --filter @repo/config install


RUN pnpm --filter @repo/puppeteer install


RUN npx prisma generate --schema=/opt/timed-task-js/packages/config/prisma/schema.prisma

EXPOSE 3001

CMD pnpm --filter @repo/puppeteer start:prod