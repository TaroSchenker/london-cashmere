// routes/userRoutes.ts

import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';


const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
