import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true }
}, { timestamps: true })


const Apply = mongoose.model('Apply', postSchema)
export default Apply;