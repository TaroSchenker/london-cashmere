// routes/orderRoutes.ts

import express from 'express';
const router = express.Router();

import { createOrder, getOrder, updateOrderStatus, deleteOrder, getOrders } from '../controllers/orderController';
import { authenticate } from '../middleware/authMiddleware';

router.get('/', authenticate, getOrders)
router.post('/', authenticate, createOrder);
router.get('/:orderId',authenticate, getOrder);
router.put('/:orderId', authenticate, updateOrderStatus);
router.delete('/:orderId',authenticate,  deleteOrder);

export default router;
