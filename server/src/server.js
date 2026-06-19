import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'


// configuration
const app = express()
const PORT = process.env.PORT || 5000

// built in middlewares
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())

// health checker routes
app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/auth', authRoutes)

// database connection
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
