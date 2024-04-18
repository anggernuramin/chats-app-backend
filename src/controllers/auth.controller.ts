import { Request, Response } from 'express'
import User from '../models/user.model'
import { generateToken } from '../utils/generateToken'
import bcrypt from 'bcrypt'

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, picture } = req.body
  console.log(name, email, password, picture)
  if (!name || !email || !password) {
    return res.status(400).json({
      status: 'false',
      statusCode: 400,
      data: null,
      message: 'Please Enter all the Fields'
    })
  }

  // cek apakah user sudah ada di mongoDB dgn cek email
  const userExist = await User.findOne({ email })
  if (userExist) {
    return res.status(400).json({
      status: 'false',
      data: null,
      statusCode: 400,

      message: 'User already exist'
    })
  }

  try {
    // buat user
    const user = await User.create({
      name,
      email,
      password,
      picture
    })

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        password: user.password,
        picture: user.picture,
        token: generateToken(String(user._id))
      })
    } else {
      return res.status(400).json({
        status: 'false',
        statusCode: 400,
        data: null,
        message: 'User Not Found'
      })
    }
  } catch (error) {
    return res.json({ status: false, statusCode: 500, message: error })
  }
}

export const authUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    // jika user ada maka akan membuat token baru saat login

    const checkPassword: boolean = bcrypt.compareSync(password, String(user?.password))
    console.log('🚀 ~ authUser ~ checkPassword:', checkPassword)

    // menccookan password dengan skema yang teah dbuat di user.model
    if (user && checkPassword) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        password: user.password,
        picture: user.picture,
        token: generateToken(String(user._id))
      })
    } else {
      return res.status(400).json({
        status: 'false',
        statusCode: 400,
        data: null,
        message: 'Email and Password is incorrect'
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      statusCode: 500,
      data: null,
      message: error
    })
  }
}
