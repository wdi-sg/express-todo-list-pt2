const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')
const passport = require('../config/ppConfig')

router.get('/login', userController.loginPage)

router.get('/signup', userController.signupPage)

router.post('/signup', userController.signup)

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/auth/login'
}))

router.post('/logout', userController.logout)

module.exports = router
