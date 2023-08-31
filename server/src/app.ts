import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import connectDb from './config/db';
import cors from 'cors';

// Import routers
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

dotenvConfig();

const app = express();

// const corsOptions = {
//   origin: [
//     'http://localhost:3000',
//     'http://client:3000',
//     'http://localhost:5173',
//   ], // Include any other origins you need to support
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors());
app.use(bodyParser.json());

connectDb();

// Use routers
app.use('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/users', userRoutes);
app.use('/api/products',productRoutes);

// Error handling middleware
// app.use(errorHandler); // <-- Use error handler

export default app;
