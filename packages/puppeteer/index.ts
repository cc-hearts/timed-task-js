import express from "express";
import { logger } from "@repo/utils";
import { Config } from "@repo/config";
import router from "./router.js";
import bodyParse from "body-parser";

const app = express();

const { urlencoded, json } = bodyParse;

app.use(urlencoded({ extended: false }));

app.use(json());

const { puppeteerConfig } = Config.getYamlConfig();
const { port } = puppeteerConfig;

app.use(router);

app.listen(port, "0.0.0.0", () => {
  logger.success(`启动成功http://localhost:${port}`);
});
