import * as IoRedis from "ioredis";
import type { Config } from "../types/types";

let redis: IoRedis.Redis | null;

function getRedisInstance(redisConfig: Config["redis"]) {
  if (!redis) {
    redis = new IoRedis.default(redisConfig);
  }
  return redis;
}

function closeRedisInstance() {
  if (redis) {
    redis.disconnect();
    redis = null;
  }
}

export default {
  getRedisInstance,
  closeRedisInstance,
};
