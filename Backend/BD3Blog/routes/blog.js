const express = require('express')
const router = express.Router()

//import controller
const {createBlog} = require('../controllers/createBlog')

//define route
router.post('/createBlog', createBlog);


module.exports = router;