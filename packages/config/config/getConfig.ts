import { load } from "js-yaml";
import { fileURLToPath } from "url";
import { resolve } from "path";
import { logger } from "@repo/utils";
import type { Config } from "../types/types.js";
import { readFileSync } from "fs";

function getYamlConfig(): Config | null {
  try {
    const path = fileURLToPath(import.meta.url);
    // 导出当前目录下的 yaml 配置文件
    return load(
      readFileSync(resolve(path, "../", "./app.yaml"), { encoding: "utf8" }),
      "utf8"
    );
  } catch (e) {
    logger.error(e);
    return null;
  }
}

export default {
  getYamlConfig,
};
