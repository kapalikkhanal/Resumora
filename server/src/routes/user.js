const express = require('express')
const router = express.Router()
const userController=require('../controllers/user.js')

router.post('/user', userController.registerNewUser)
router.post('/login', userController.loginUser)

module.exports = router