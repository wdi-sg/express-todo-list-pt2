require('dotenv').config({ silent: true })
const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('./config/ppConfig')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

app.use('/todo', require('./routes/todo_router'))

app.use('/auth', require('./routes/user_router'))

app.use('/', (req, res) => {
  res.redirect('/todo')
})

app.listen(3000)
