const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')

router.get('/login', userController.loginPage)

router.get('/signup', userController.signupPage)

router.post('/signup', userController.signup)

router.post('/login', userController.login)

module.exports = router
