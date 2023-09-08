// routes/orderRoutes.ts

import express from "express";
const router = express.Router();

import { authenticate, isAdmin } from "../middleware/authMiddleware";
import {
  getOrders,
  createOrder,
  getOrder,
  updateOrderStatus,
  deleteOrder
} from "../controllers/OrderController";

router.get("/", authenticate, isAdmin, getOrders);
router.post("/", authenticate, createOrder);
router.get("/:orderId", getOrder);
router.put("/:orderId", authenticate, updateOrderStatus);
router.delete("/:orderId", authenticate, deleteOrder);

export default router;
