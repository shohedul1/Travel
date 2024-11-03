import express from 'express';
import upload from '../config/cloudinary.js';
import { createPost, deleteCreatePost, getAllPosts, getPostById, getRecentPost, updateCreatePost } from '../controllers/postController.js';
import { authMiddleware } from '../authMiddleware/authMiddleware.js';

const router = express.Router();

// Create post with media upload
router.post('/posts', authMiddleware, upload.single('image'), createPost);
//get post route
router.get("/posts", getAllPosts);
//get Recent post 
router.get("/posts/recent", getRecentPost)
//get post by userid
router.get('/posts/user/:postId', getPostById);
//updateuser post
router.put('/posts/user/:postId', authMiddleware, upload.single('image'), updateCreatePost);
//delet a post by its Id
router.delete('/posts/user/:postId', authMiddleware, deleteCreatePost);




export default router;