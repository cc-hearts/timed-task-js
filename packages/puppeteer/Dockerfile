FROM ghcr.io/puppeteer/puppeteer:latest

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /opt/puppeteer

COPY . .

USER root
RUN npm install -g pnpm

CMD pnpm --filter @repo/puppeteer start