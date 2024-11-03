import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'profile_pictures', // Customize as needed
        allowedFormats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage, limits: { fileSize: Infinity } });

export default upload;

