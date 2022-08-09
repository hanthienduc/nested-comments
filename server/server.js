import fastify from "fastify";
import sensible from "@fastify/sensible"
import fastifyCors from "@fastify/cors";
import fastifyCookie from "@fastify/cookie";

import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client"
dotenv.config()
const app = fastify()
app.register(sensible)
app.register(fastifyCookie, {
  secret: process.env.COOKIE_SECRET
})
app.register(fastifyCors, {
  origin: process.env.CLIENT_URL,
  credentials: true
})

const prisma = new PrismaClient()

const CURRENT_USER_ID = (await prisma.user.findFirst({ where: { name: 'Sally' } })).id

app.addHook("onRequest", (req, res, done) => {
  if (req.cookies.userId !== CURRENT_USER_ID) {
    req.cookies.userId = CURRENT_USER_ID
    req.clearCookie("userId")
    req.setCookie("userId", CURRENT_USER_ID)
  }
})

app.get('/posts', (req, res) => {
  return await commitToDb(prisma.post.findMany({
    select: {
      id: true,
      title: true
    }
  }))
})

async function commitToDb(promise) {
  const [error, data] = await app.to(promise)
  if (error) return app.httpErrors.internalServerError(error.message)
  return data
}
