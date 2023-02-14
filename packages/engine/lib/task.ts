import { Task } from "@repo/config";

import { addIntervalTask } from "./interval.js";

import type { timerCallback } from "../types/types";
import { puppeteerTask, interTask } from "./taskType.js";

let interTaskList: timerCallback;

async function useTask() {
  interTaskList = async () => {
    // 查询所有的任务
    const taskList = await Task.searchAllTask();

    if (taskList instanceof Array) {
      taskList.forEach(async (acc) => {
        const { taskType } = acc;
        switch (String(taskType)) {
          case "1":
            interTask(acc);
            break;
          case "2":
            puppeteerTask(acc);
        }
      });
    }
  };

  addIntervalTask(interTaskList);
}

export default function bootstrap() {
  useTask();
}
