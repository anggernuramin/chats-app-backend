import express, { Application } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connectDB } from './config/connectDb'
import routes from './routes'
import { notFound } from './middlewares/error.middleware'
// import { io, Socket } from 'socket.io'
dotenv.config()
connectDB() // Connect Mongo Db
const app: Application = express()
const port = process.env.PORT || 3000

// middlewares
app.use(bodyParser.urlencoded({ extended: false })) // accept json body
app.use(bodyParser.json())

app.use(cors()) // accept cors

// kumpulan routes
routes(app)

// middleware error handler ketika routes tidak ada
app.use(notFound)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})
