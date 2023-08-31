// routes/orderRoutes.ts

import express from 'express';
const router = express.Router();

import { createOrder, getOrder, updateOrderStatus, deleteOrder } from '../controllers/orderController';
import { authenticate } from '../middleware/authMiddleware';

router.post('/', authenticate, createOrder);
router.get('/:orderId', getOrder);
router.put('/:orderId', updateOrderStatus);
router.delete('/:orderId', deleteOrder);

export default router;
