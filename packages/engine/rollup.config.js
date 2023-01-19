import { join } from "path";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { fileURLToPath } from "url";
const resolveFile = function (filePath) {
  return join(fileURLToPath(import.meta.url), "..", filePath);
};

export default {
  input: resolveFile("./index.ts"),
  output: {
    file: resolveFile("./dist/index.js"),
    format: "esm",
  },
  external: ['@prisma/client'],
  plugins: [
    resolve(),
    json(),
    commonjs(),
    typescript(),
    // babel({
    //   presets: ["@babel/preset-env"],
    // }),
  ],
};
