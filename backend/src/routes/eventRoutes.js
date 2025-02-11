import express from 'express';
import eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

// Define routes
eventRouter.post('/', eventController.createEvent);
eventRouter.get('/', eventController.getAllEvents);
eventRouter.get('/:id', eventController.getEvent);
eventRouter.delete('/:id', eventController.deleteEvent);
eventRouter.patch('/:id', eventController.patchEvent);
eventRouter.post('/:eventId/:userId', eventController.addUserToEvent);
eventRouter.delete('/:eventId/:userId', eventController.removeUserFromEvent);

export default eventRouter;