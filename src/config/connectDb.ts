import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_DB}`)
    console.log('Connect DB Success, host === ', connect.connection.host)
  } catch (error) {
    console.log('Coonect Mongo DB gagal', error)
  }
}
