import Prisma from "../../lib/prisma.js";

async function searchAllTask() {
  const prisma = Prisma.getPrismaInstance();
  const taskList = await prisma.interTask.findMany({
    where: {
      isDelete: 0,
    },
  });
  return taskList;
}

export default {
  searchAllTask,
};
