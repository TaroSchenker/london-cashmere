import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import connectDb from './config/db';
import cors from 'cors';
// Import routers

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

// //health check
// app.get('/health', async (req: Request, res: Response) => {
//   // ...
// });

// Use routers
app.use('/users', userRoutes);

// Error handling middleware
// app.use(errorHandler); // <-- Use error handler

export default app;
