import { Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
const express = require('express')
const app = express()
const port = 3000

app.use(cors())
app.use(helmet())

app.get('/', (req:Request, res:Response) => {
  res.status(200).json({"message":'🌌 Hello Milky Way!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})