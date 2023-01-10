/**
 * @author cc-heart
 * @description 定义prisma的数据
 * @Date 2023-01-07
 */
import { PrismaClient } from "@prisma/client";
declare function getPrismaInstance(): PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
declare function closePrismaInstance(): void;
declare const _default: {
    getPrismaInstance: typeof getPrismaInstance;
    closePrismaInstance: typeof closePrismaInstance;
};
export default _default;
