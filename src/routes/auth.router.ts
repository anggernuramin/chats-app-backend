import { Router } from 'express'
import { registerUser, authUser } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', authUser)
