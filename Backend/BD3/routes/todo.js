const express = require('express')

const router = express.Router()

// import controller
const {createTodo} = require('../controllers/createTodo')
const {getTodo, getTodoById} = require('../controllers/getTodo')
const {updateTodo} = require('../controllers/updateTodo')
const {deleteTodo} = require('../controllers/deleteTodo')

//define API routes
router.post("/createTodo", createTodo)

// http://localhost:3000/app/v1/getTodo
router.get('/getTodos', getTodo)

// http://localhost:3000/app/v1/getTodos/68d8e03d64d409a40f877d3e
router.get('/getTodos/:id', getTodoById)


router.put('/updateTodo/:id', updateTodo)

// http://localhost:3000/app/v1/deleteTodo/:id
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;