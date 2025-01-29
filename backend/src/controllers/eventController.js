import Event from '../models/event.js';
import User from '../models/user.js';

const createEvent = async (req, res) => {
    const userEmail = req.loggedUser.email;
    const user = await User.findOne({ email: userEmail });
    const event = new Event({ organizer: user._id, ...req.body });
    try {
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
};

const getEvent = async (req, res) => {
    try{
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the event:', error);
    }
}

const deleteEvent = async (req, res) => {
    try{
        const eventId = req.params.id;
        const event = await Event.findByIdAndDelete(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully', event: event });
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the event:', error);
    }
}

const patchEvent = async (req, res) => {
    try{
        const eventId = req.params.id;
        const event = await Event.findByIdAndUpdate(eventId, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event); // Send response
    } catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
        console.error('Error fetching the event:', error);
    }
}

const addUserToEvent = async (req, res) => {
    const { eventId, userId } = req.params;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { $addToSet: { attendees: userId } }, // Use $addToSet to prevent duplicates
            { new: true }
        ).populate('attendees', 'name email'); // Populate attendee details

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const removeUserFromEvent = async (req, res) => {
    const { eventId, userId } = req.params;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { $pull: { attendees: userId } }, // Use $pull to remove the user ID
            { new: true }
        ).populate('attendees', 'name email'); // Populate attendee details

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



export default { createEvent, getAllEvents , getEvent, deleteEvent , patchEvent , addUserToEvent , removeUserFromEvent };