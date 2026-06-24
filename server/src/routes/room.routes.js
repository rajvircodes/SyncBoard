// server/routes/roomRoutes.js
const express = require('express')
const router = express.Router()
const { createRoom, getRoom } = require('../controller/roomController')

// Keep routes thin — logic lives in controllers, not here
router.post('/create', createRoom)
router.get('/:roomId', getRoom)

module.exports = router
