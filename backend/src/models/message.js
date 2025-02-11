import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    sender: {type: String, required: true},
    event: {type: String, required: true},
    date: {type: Date, required: true},
    content: {type: String, required: true}
});

export default mongoose.model('Message', messageSchema);