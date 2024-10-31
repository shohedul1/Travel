import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null },
    gender: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    profilePicture: { type: String, default: null },
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User;