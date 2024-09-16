import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
  var __db: PrismaClient
}

export {}
