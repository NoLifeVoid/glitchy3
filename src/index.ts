import { Request, Response } from "express"
import cors from "cors"
const compression = require("compression");
const helmet = require("helmet");
const express = require('express')
const app = express()
const port = 3000

const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});
app.use(limiter);
app.use(cors())
app.use(helmet())

app.get('/', (req:Request, res:Response) => {
  res.status(200).json({"message":'🌌 Hello Milky Way!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})