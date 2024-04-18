import { Request, Response } from 'express'
export const getChat = (req: Request, res: Response) => {
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
  return res.send({
    message: 'succes',
    data: chats
  })
}
