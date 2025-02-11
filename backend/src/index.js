// src/index.js
import express, { json } from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import tokenChecker from './middlewares/tokenChecker.js';
import cors from 'cors';

const app = express();
app.use(json()); // Middleware to parse JSON bodies
app.use(cors())
connectDB();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', tokenChecker, userRoutes);
app.use('/api/v1/events', tokenChecker, eventRoutes);
app.use('/api/v1/messages', tokenChecker, messageRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
