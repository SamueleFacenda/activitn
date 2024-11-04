import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

// Define routes
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.patch('/:id', userController.patchUser);
userRouter.get('/:id/events', userController.getEventsOrganized);
userRouter.get('/:id/participations', userController.getEventsJoined);
userRouter.get('/:id/subscriptions', userController.getEventsJoinedAndActive);




export default userRouter;