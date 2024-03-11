import mongoose from 'mongoose'

export async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    const connection = mongoose.connection
    connection.on('connected', () => console.log('mongodb connected'))
    connection.on('error', () => console.log('mongodb connection error'))
    console.log('mongodb connected')
  } catch (error) {
    console.log('mongodb connection error', error)
    throw new Error('mongodb failed to connected')
  }
}
