import { mkdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
export default function cpConfigFile(copiedPath, resultPath) {
  return {
    name: "cp-config-file",
    async buildEnd() {
      const path = resultPath.split("/").slice(0, -1).join("/");

      if (!existsSync(path)) {
        await mkdir(path, { recursive: true });
      }
      copyFile(copiedPath, resultPath);
    },
  };
}
