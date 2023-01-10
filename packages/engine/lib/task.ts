import { Task } from "@repo/config";

import { addIntervalTask } from "./interval.js";

import type { timerCallback } from "../types/types";

let interTask: timerCallback;


async function useTask() {
  interTask = async () => {
    // 查询所有的任务
    const taskList = await Task.searchAllTask();
    if (taskList instanceof Array) {
      taskList.forEach(async (acc) => {
        const { taskType } = acc
        switch(String(taskType)) {
          case '1':
            interTask(acc)
            break
        }
      });
    }
  };

  addIntervalTask(interTask);
}

export default function bootstrap() {
  useTask();
}
