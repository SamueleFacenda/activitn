import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

// Define routes
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);

export default userRouter;