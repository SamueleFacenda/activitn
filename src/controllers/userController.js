import User from '../models/user.js';
import Event from '../models/event.js';
import bcrypt from 'bcryptjs';

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const getUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the user:', error);
    }
}

const deleteUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', user: user });
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the user:', error);
    }
}

const patchUser = async (req, res) => {
    try{
        const userId = req.params.id;
        let updatedData = { ...req.body };
        console.log(updatedData);
        if (updatedData.password) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
        }
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the user:', error);
    }
}

const getEventsOrganized = async (req, res) => {
    try{
        const userId = req.params.id;
        const events = await Event.find({ organizer: userId });
        res.json(events); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the events organized by the user:', error);
    }
}

const getEventsJoined = async (req, res) => {
    try{
        const userId = req.params.id;
        const events = await Event.find({ attendees: userId }).populate('attendees');
        res.json(events); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the events where the user partecipated:', error);
    }
}

const getEventsJoinedAndActive = async (req, res) => {
    try{
        const userId = req.params.id;
        const events = await Event.find({
            attendees: userId,
            date: { $gte: new Date() }
        }).populate('attendees');
        res.json(events); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the events where the user partecipated:', error);
    }
}

export default { getAllUsers , getUser , deleteUser , patchUser , getEventsOrganized , getEventsJoined , getEventsJoinedAndActive};