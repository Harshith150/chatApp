import mongoose from "mongoose";
import User from '../models/user-model.js';
const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        createdAt: { type: Date, default: Date.now }
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref : User,
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref : User,
        required: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;