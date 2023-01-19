FROM node:16

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /opt/timed-task-js

COPY . .

RUN apt-get update \
  && apt-get install -y wget gnupg \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
  && mkdir -p /home/pptruser/Downloads \
  && chown -R pptruser:pptruser /home/pptruser

USER pptruser


RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g pnpm

RUN pnpm install -w

RUN pnpm --filter @repo/utils install
RUN pnpm --filter @repo/config install


RUN pnpm --filter @repo/puppeteer install


RUN npx prisma generate --schema=/opt/timed-task-js/packages/config/prisma/schema.prisma

EXPOSE 3001

CMD pnpm start:prod