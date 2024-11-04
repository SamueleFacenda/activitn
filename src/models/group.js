import mongoose from 'mongoose';
const { Schema } = mongoose;

const groupSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    organizer: {type: String, required: true},
});

export default mongoose.model('Group', groupSchema);