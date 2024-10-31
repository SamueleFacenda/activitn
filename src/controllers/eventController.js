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
export default { createEvent, getAllEvents };