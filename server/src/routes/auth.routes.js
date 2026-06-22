const express = require('express')
const { login, logout, signup } = require('../controller/auth.controller')
const router = express.Router()

router.get('/signup', signup)
router.get('/login', login)
router.get('/logout', logout)

module.exports = router
