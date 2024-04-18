import { Router } from 'express'
import { getChat } from '../controllers/chat.controller'

export const ChatRouter: Router = Router()

ChatRouter.get('/', getChat)
