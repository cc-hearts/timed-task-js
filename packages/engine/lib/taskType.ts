import { logger, Fetch } from "@repo/utils";
import { initRedis } from "./init.js";
import type { Prisma } from "@repo/config/index.js";
// export enum TASK_TYPE {
//   INTER_TASK = 1,
//   PUPPETEER,
// }

type prismaInstance = getFuncReturnType<
  (typeof Prisma)["getPrismaInstance"]
>["interTask"]["findMany"];

type getFuncReturnType<T> = T extends (...args: any[]) => infer r ? r : never;

type getPrismaInstance<T> = T extends Promise<infer r> ? r : never;

type getEachForArray<T extends unknown[]> = T extends Array<infer r>
  ? r
  : never;

type interTaskInstance = getEachForArray<
  getPrismaInstance<getFuncReturnType<prismaInstance>>
>;

export async function interTask(acc: interTaskInstance) {
  const redis = initRedis();
  const { method, url, cookie, id } = acc;
  let { params } = acc;
  const headers: { Cookie?: string } = {};

  if (cookie) {
    headers.Cookie = cookie;
  }

  try {
    params = JSON.stringify(params);
    const cacheId = await redis.get(String(id));
    if (!cacheId) {
      logger.success("=======interval task pending========" + url);
      const res = await Fetch.request(url, method, params, headers);
      logger.success(`=======interval task success======== ${url} , request data:`, res.data);
      await redis.set(String(id), url, "EX", 60 * 60 * 24);
    }
  } catch (e) {
    logger.error(`task error url:${url}, id:${id}, error: ${e}`);
  }
}
export async function puppeteerTask(acc: interTaskInstance) {
  const { url, params, id } = acc;
  logger.info("params is ", params);
  try {
    const res = await Fetch.request(url, "GET", Object.assign({}, params, id));
    logger.success(`${url} is request success`, res);
  } catch (e) {
    logger.error("puppeteer request error:", e);
  }
}
