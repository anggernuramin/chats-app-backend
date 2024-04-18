import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDb'
// import { io, Socket } from 'socket.io'
dotenv.config()
connectDB()
const app = express()
const port = process.env.PORT || 3000
const chats = [
  {
    isGrupChat: false,
    users: [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com'
      },
      {
        name: 'angger',
        email: 'anggern514@gmail.com'
      }
    ],
    _id: '67264824200dsytduw',
    chatName: 'John Doe'
  },
  {
    isGrupChat: false,
    users: [
      {
        name: 'Guest',
        email: 'guest@gmail.com'
      },
      {
        name: 'vindi',
        email: 'vindin514@gmail.com'
      }
    ],
    _id: '1910980ijhkjhdw',
    chatName: 'Angger'
  }
]
app.get('/api/chats', (req: Request, res: Response) => {
  res.send({
    message: 'succes',
    data: chats
  })
})

app.get('/api/chat/:id', (req: Request, res: Response) => {
  const chat = chats.find((item) => item._id === req.params.id)
  res.send({
    data: chat
  })
})
app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})
