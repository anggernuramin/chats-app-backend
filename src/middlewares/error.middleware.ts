import { Request, Response, NextFunction } from 'express'
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error: Error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}
