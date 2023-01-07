#! /bin/bash

npx prisma generate --schema=./prisma/schema.prisma

npx prisma migrate dev --name init --schema=./prisma/schema.prisma