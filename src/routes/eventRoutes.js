import express from 'express';
import eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

// Define routes
eventRouter.post('/', eventController.createEvent);
eventRouter.get('/', eventController.getAllEvents);

export default eventRouter;