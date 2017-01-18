const User = require('../models/user')
const passport = require('../config/ppConfig')

const userController = {
  signupPage: function (req, res) {
    res.render('user/signup')
  },

  loginPage: function (req, res) {
    res.render('user/login')
  },

  signup: function (req, res) {
    User.find({ email: req.body.email }, (err, foundUser) => {
      if (err) throw err
      if (foundUser) res.redirect('/auth/login')
    })
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }, (err, createdUser) => {
      if (err) {
        console.log('Signup error: ' + err)
        res.redirect('/auth/signup')
      }
      res.redirect('/')
    })
  },

  login: function (req, res) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login'
    })
  }

  // profile: function (req, res) {
  //   res.render('user/profile', {
  //     user: req.user
  //   })
  // }

  // route middleware to make sure user is logged in
  // function isLoggedIn (req, res, next) {
  //   if (req.isAuthenticated()) return next()
  //   res.redirect('/')
  // }

}

module.exports = userController
