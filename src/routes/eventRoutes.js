import express from 'express';
import eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

// Define routes
eventRouter.post('/', eventController.createEvent);
eventRouter.get('/', eventController.getAllEvents);
eventRouter.get('/:id', eventController.getEvent);
eventRouter.delete('/:id', eventController.deleteEvent);
eventRouter.patch('/:id', eventController.patchEvent);

export default eventRouter;