import express from 'express';
import { checkUserAuth, getAllUser, loginUser, logout, registerUser } from '../controllers/authController.js';
import { authMiddleware } from '../authMiddleware/authMiddleware.js';
import upload from '../config/cloudinary.js';
const router = express.Router();



router.post('/register', upload.single('profilePicture'), registerUser)
router.post('/login', loginUser)
router.get('/logout', logout);
router.get('/getalluser', getAllUser);
router.get('/check-auth', authMiddleware, checkUserAuth);




export default router;