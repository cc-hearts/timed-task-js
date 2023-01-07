import { Redis, Config } from "@repo/config";

export function initRedis() {
  const config = Config.getYamlConfig();
  if (config?.redis) {
    return Redis.getRedisInstance(config?.redis);
  }
  throw new Error("config redis is error:" + config?.redis);
}
