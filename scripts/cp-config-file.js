import { copyFile } from "fs/promises";
export default function cpConfigFile(copiedPath, resultPath) {
  return {
    name: "cp-config-file",
    buildEnd() {
      setTimeout(() => {
        copyFile(copiedPath, resultPath);
      }, 1000);
    },
  };
}
