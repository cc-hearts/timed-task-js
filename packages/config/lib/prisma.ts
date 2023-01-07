/**
 * @author cc-heart
 * @description 定义prisma的数据
 * @Date 2023-01-07
 */
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null;
function getPrismaInstance() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

function closePrismaInstance() {
  if (prisma) {
    prisma.$disconnect();
    prisma = null;
  }
}

export default {
  getPrismaInstance,
  closePrismaInstance,
};
