import { join } from "path";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import cpConfigFile from "../../scripts/cp-config-file.js";
import { fileURLToPath } from "url";
const resolveFile = function (filePath) {
  return join(fileURLToPath(import.meta.url), "..", filePath);
};

const configPath = resolveFile("../config/config/app.yaml");

const targetPath = resolveFile("./dist/app.yaml");

export default {
  input: resolveFile("./index.ts"),
  output: {
    // file: resolveFile("./dist/index.js"),
    dir: 'dist',
    format: "esm",
  },
  external: ["@prisma/client"],
  plugins: [
    resolve(),
    json(),
    commonjs(),
    typescript(),
    cpConfigFile(configPath, targetPath),
    // babel({
    //   presets: ["@babel/preset-env"],
    // }),
  ],
};
