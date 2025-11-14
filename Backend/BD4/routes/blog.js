const express = require('express');
const router = express.Router();


//Import controllers
// const { dummyLinks } = require('../controllers/likeControllers')
const { createComment } = require('../controllers/commentController')
const { createPost, getAllPosts } = require('../controllers/postControllers')
const { likePost, unlikePost } = require('../controllers/likeControllers')


//Mapping create
// router.get('/dummyroute', dummyLinks);

// Mapping create
router.post('/comments/create', createComment)
router.post('/posts/create', createPost)
router.get('/posts', getAllPosts)
router.post('/likes/like', likePost)
router.post('/likes/unlike', unlikePost)

//exports
module.exports = router;