const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const todo = require('./routes/todo_router')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'views')))

app.use('/todo', todo)

app.listen(3000)
