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

