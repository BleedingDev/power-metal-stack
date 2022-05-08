import { PrismaClient } from "@prisma/client"

declare global {
  var __db__: PrismaClient
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production we'll have a single connection to the DB.
const prisma: PrismaClient = (function () {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient()
  } else {
    if (!global.__db__) {
      // eslint-disable-next-line functional/immutable-data
      global.__db__ = new PrismaClient()
    }
    global.__db__.$connect()
    return global.__db__
  }
})()

export { prisma }
