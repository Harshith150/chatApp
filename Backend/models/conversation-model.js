import mongoose from "mongoose";
import User from '../models/user-model.js';
import Message from '../models/message-model.js'
const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : User,
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : Message,
            default: []
        }
    ]

}, { timestamps: true });                              

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
// In the code snippet above, we have created a conversation schema that has a members field which is an array of objects. The members field will contain the IDs of the users who are part of the conversation. The timestamps: true option will automatically add the createdAt and updatedAt fields to the conversation schema.  