// src/index.js
import express, { json } from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import authRoutes from './routes/authRoutes.js';
import tokenChecker from './middlewares/tokenChecker.js';


const app = express();
app.use(json()); // Middleware to parse JSON bodies

connectDB();

// Apply tokenChecker middleware globally
//app.use(tokenChecker);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', tokenChecker, userRoutes);
app.use('/api/v1/events', tokenChecker, eventRoutes);


const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
