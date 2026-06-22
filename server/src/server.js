const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const connectDB = require('./config/db.js')
const cors = require('cors')
require('dotenv').config()
const authRoutes = require('./routes/auth.routes.js')

const app = express()

// built in middlewares
app.use(express.json())
app.use(express.json())

const httpServer = http.createServer(app)

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
)

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

// health checker routes
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' })
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)
})

io.on('disconnect', (socket) => {
  console.log(`User disconnected: ${socket.id}`)
})

app.use('/api/auth', authRoutes)

// database connection
const PORT = process.env.PORT || 5000

connectDB().then(() => {
  httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
