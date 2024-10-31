import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    group: {type: String, required: false},
    organizer: {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);