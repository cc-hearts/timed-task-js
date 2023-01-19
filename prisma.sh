#! /bin/bash

npx prisma generate --schema=./packages/config/prisma/schema.prisma

# npx prisma migrate dev --name init --schema=./packages/config/prisma/schema.prisma