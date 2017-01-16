let Todo = require('../models/todo')

let todosController = {
  list: (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err) throw err
      res.render('todo/index', { todos: todos })
    })
  },

  new: (req, res) => {
    res.render('todo/create')
  },

  listOne: (req, res) => {
    Todo.findById(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.render('todo/single-todo', { todoItem: todoItem })
    })
  },

  create: (req, res) => {
    let newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: true
    })
    newTodo.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/todo')
    })
  },

  edit: (req, res) => {
    Todo.findById(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.render('todo/edit', { todoItem: todoItem })
    })
  },

  delete: () => {

  }

}

module.exports = todosController
