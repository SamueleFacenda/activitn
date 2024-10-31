import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

// Define routes
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.patch('/:id', userController.patchUser);


export default userRouter;