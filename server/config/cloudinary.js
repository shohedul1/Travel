// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
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
console.log(
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
)

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'profile_pictures', // Customize as needed
        allowedFormats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage, limits: { fileSize: Infinity } });

export default upload;


// Configure Cloudinary storage
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: (req, file) => {
//         return {
//             resource_type: file.mimetype.startsWith('image') ? 'image' : 'video',
//         };
//     },
// });



// // Initialize multer with Cloudinary storage and unlimited file size
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: Infinity }, // Allow any file size
// });

// export default upload;
