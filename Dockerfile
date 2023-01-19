FROM node:16

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /opt/timed-task-js

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g pnpm

RUN pnpm install -w

RUN pnpm --filter @repo/utils install
RUN pnpm --filter @repo/config install
RUN pnpm --filter @repo/engine install
RUN pnpm --filter @repo/puppeteer install

RUN npx prisma generate --schema=/opt/timed-task-js/packages/config/prisma/schema.prisma

RUN  pnpm build:prod

EXPOSE 5782

CMD pnpm start:prod