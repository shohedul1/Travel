import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js";
import applyRoute from "./routes/applyRoute.js"
import connectDB from './config/connectDB.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: "Infinity" }));
app.use(cookieParser());

const corsOptions = {
    origin: true, // Change to your frontend URL in production
    credentials: true,
};
app.use(cors(corsOptions));

//api route
app.use('/auth', authRoute);
app.use('/users', postRoute);
app.use('/apply', applyRoute)




// start the server

const PORT = process.env.PORT || 5001; // Changed to 5001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
