import { logger } from "@repo/utils";
import { Router } from "express";
import * as ServeLess from "./serve/index.js";
const router = Router();

logger.info(ServeLess);

router.post("/puppeteer", async (req, res) => {
  const { methodName, id } = req.body;
  if (!id) {
    logger.error("id is error:", id);
    return;
  }

  if (ServeLess[methodName]) {
    const ans = await ServeLess[methodName](id);
    return res.send({
      data: ans,
    });
  } else {
    const msg = `${methodName} is not exist serviceLess`;
    logger.error(msg);
    res.send({
      msg,
    });
  }
});

export default router;
