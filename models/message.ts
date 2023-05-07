import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
        message_id: {
            type: String,
            required: true,
            unique: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;