const express = require('express');

const router = express.Router();
const todoController= require('../controllers/home_controller');

router.get('/',todoController.home);
// router.use('/addTodo',require('./todo'));
router.post('/addTodo',todoController.addTodo);
router.post('/deleteTodo',todoController.deleteTodo);

module.exports= router;