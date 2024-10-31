// src/index.js
import express, { json } from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
app.use(json()); // Middleware to parse JSON bodies

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
