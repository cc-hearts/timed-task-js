import type { timerCallback } from "types/types";

export function addIntervalTask(callback: timerCallback, time = 1000 * 10) {
  callback._timer = setInterval(() => {
    callback instanceof Function && callback();
  }, time);
}

export default { addIntervalTask };
