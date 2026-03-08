import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './utils/config.js'

dotenv.config()

import authRouter from './routes/authRouter.js'
import profileRoute from './routes/profileRouter.js'
import emergencyRoute from './routes/emergencyRoute.js'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
  res.send('API is running...')
})
app.use('/auth', authRouter)
app.use('/emergency', emergencyRoute)
app.use('/profile', profileRoute)

// Middlewares goes in here

// Server functionality

const PORT = process.env.PORT || 5000

// Start the server only after DB connects
const startServer = async () => {
  try {
    await connectDB()
    console.clear()
    console.log('✅ MongoDB Connected')
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message)
    process.exit(1) // stop app from continuing
  }
}

startServer()
