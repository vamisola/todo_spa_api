const express = require('express');
const router = express.Router();
var db = require('../models');
var controllers = require('../controllers/todos');

router.route('/')
  .get(controllers.getTodos)
  .post(controllers.createTodo)

router.route('/:todoId')
  .get(controllers.getTodo)
  .put(controllers.updateTodo)
  .delete(controllers.deleteTodo)

module.exports = router;
