import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dbAdmin = prisma.admin;
