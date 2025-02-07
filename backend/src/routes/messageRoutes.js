import express from 'express';
import messageController from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.post('/:id', messageController.createMessage);
messageRouter.get('/:id', messageController.getEventMessages);

export default messageRouter;