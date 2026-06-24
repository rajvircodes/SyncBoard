const { v4: uuidv4 } = require('uuid')
const Room = require('../models/Room')

const createRoom = async (req, res) => {
  try {
    const roomId = uuidv4().slice(0, 8)

    const room = await Room.create({
      roomId,
      participants: [],
      isActive: true,
    })

    res.status(201).json({
      success: true,
      roomId: room.roomId,
      message: 'Room created successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getRoom = async (req, res) => {
  try {
    const { roomId } = req.params

    const room = await Room.findOne({ roomId, isActive: true })

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found or no longer active',
      })
    }

    res.status(200).json({
      success: true,
      room: {
        roomId: room.roomId,
        participantCount: room.participants.length,
        createdAt: room.createdAt,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = { createRoom, getRoom }
