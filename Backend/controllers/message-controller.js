import messageModel from '../models/message-model.js';
import conversationModel from '../models/conversation-model.js';

const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const reciverId = req.params.id;
        const {message} = req.body;
        console.log(req.user)

        let conversation = await conversationModel.findOne({    
            participants: { $all: [senderId, reciverId] }
        });

        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, reciverId]
            });
        }

        const newMessage = await messageModel.create({
            message: message,
            sender: senderId,
            receiver: reciverId
        });

        conversation.messages.push(newMessage._id);
        await conversation.save();
        res.status(200).send(newMessage);


    } catch (error) {
        console.log("error in sending message", error);
        res.status(500).send("Internal server error");      
    }
}


const getMessage = async (req, res) => {

    try {
        const senderId = req.user._id;
        const reciverId = req.params.id;
        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, reciverId] }
        })

        if (!conversation) {
            return res.status(200).send([]);
        }

        const messages = await messageModel.find({
            _id: { $in: conversation.messages }
        });

        res.status(200).send(messages);
    }

    catch (error) {
        console.log("error in getting message", error);
        res.status(500).send("Internal server error");
    }
}







export { sendMessage ,getMessage};