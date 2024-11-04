// src/index.js
import express, { json } from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
app.use(json()); // Middleware to parse JSON bodies

connectDB();

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/events', eventRoutes);


const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
