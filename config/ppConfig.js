const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  User.findOne({
    email: email
  }, function (err, user) {
    if (err) return done(err)

    if (!user) {
      console.log('No user found')
      return done(null, false)
    }

    if (!user.validPassword(password)) {
      console.log('Invalid password')
      return done(null, false)
    }

    console.log('logged in!')
    return done(null, user)
  })
}))

module.exports = passport
