import * as IoRedis from "ioredis";
import type { Config } from "../types/types";
declare function getRedisInstance(redisConfig: Config["redis"]): IoRedis.Redis;
declare function closeRedisInstance(): void;
declare const _default: {
    getRedisInstance: typeof getRedisInstance;
    closeRedisInstance: typeof closeRedisInstance;
};
export default _default;
