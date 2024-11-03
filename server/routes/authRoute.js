import express from 'express';
import { checkUserAuth, existingUserUpdate, getAllUser, loginUser, logout, registerUser } from '../controllers/authController.js';
import { authMiddleware } from '../authMiddleware/authMiddleware.js';
import upload from '../config/cloudinary.js';
const router = express.Router();



router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/getalluser', getAllUser);
router.get('/check-auth', authMiddleware, checkUserAuth);
router.put('/userUpdate/:userId', upload.single('profilePicture'), existingUserUpdate);






export default router;