import Event from '../models/event.js';

const createEvent = async (req, res) => {
    const event = new Event(req.body);
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



export default { createEvent, getAllEvents , getEvent, deleteEvent , patchEvent };