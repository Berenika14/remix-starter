import { PrismaClient } from "@prisma/client";

const prisma = (global.prisma as PrismaClient) || new PrismaClient();

if (!global.prisma) {
  global.prisma = prisma;
}

export default prisma;
