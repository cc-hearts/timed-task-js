import puppeteer from "puppeteer";

import { Shard, logger } from "@repo/utils";
import { Prisma, PuppeteerConfig } from "@repo/config";

export default async function xnLogin(id: number | string) {
  const { xnLogin } = PuppeteerConfig();

  if (!xnLogin) {
    throw new Error("puppeteer xnLogin params error:" + xnLogin);
  }

  const prisma = Prisma.getPrismaInstance();

  const { url, userName, password } = xnLogin;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto(url);

  await page.type("#email", userName);

  await page.type("#password", password);

  await page.click("#login_submit");

  await Shard.sleep(10 * 1000);

  const { cookies } = await page.evaluate(() => {
    return {
      cookies: document.cookie,
    };
  });

  await prisma.interTask.update({
    where: {
      id: Number(id),
    },
    data: {
      cookie: cookies,
    },
  });

  logger.success(cookies);

  await browser.close();

  return `${id} cookie update success`;
}
