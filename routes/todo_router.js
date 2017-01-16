const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', todoController.list)

router.get('/new', todoController.new)

router.post('/', todoController.create)

router.get('/:id', todoController.listOne)

router.get('/:id/edit', todoController.edit)
//
// router.post('/todos', todoController.newChatToUser)
//
// router.get('/todos/:id', todoController.postNewChat)
//
// router.get('/todos/:id/edit', todoController.postNewChat)
//
// router.put('/todos/:id', todoController.postChatToUser)

// router.delete('/todos/:id', todoController.postChatToUser))

module.exports = router
