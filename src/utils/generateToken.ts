import jwt from 'jsonwebtoken'

export const generateToken = (payload: string) => {
  console.log(payload) // id
  return jwt.sign({ payload }, `${process.env.JWT_SECRET}`, {
    expiresIn: '30d'
  })
}
