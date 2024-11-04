import express from 'express';
import { authMiddleware } from '../authMiddleware/authMiddleware.js';
import { createApply, getAllApply } from '../controllers/applyController.js';

const router = express.Router();

router.post('/posts/:postId', authMiddleware, createApply);
router.get('/posts', authMiddleware, getAllApply);






export default router;