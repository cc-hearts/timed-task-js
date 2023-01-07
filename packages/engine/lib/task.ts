import { logger, Fetch } from "@repo/utils";
import { Task } from "@repo/config";

import { initRedis } from "./init.js";
import { addIntervalTask } from "./interval.js";

import type { timerCallback } from "../types/types";

let interTask: timerCallback;

async function useTask() {
  const redis = initRedis();
  interTask = async () => {
    // 查询所有的任务
    const taskList = await Task.searchAllTask();
    if (taskList instanceof Array) {
      taskList.forEach(async (acc) => {
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
            logger.success(
              `=======interval task success======== ${url} , request data:`,
              res.data
            );
            await redis.set(String(id), url, "EX", 60 * 60 * 24);
          }
        } catch (e) {
          logger.error(`task error url:${url}, id:${id}, error: ${e}`);
        }
      });
    }
  };

  addIntervalTask(interTask);
}

export default function bootstrap() {
  useTask();
}
