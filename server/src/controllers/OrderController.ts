// controllers/orderController.ts
import { Request, Response } from 'express';
import { Order } from '../models/Order';
import { OrderStatus } from '../types';

export const createOrder = async (req: Request, res: Response) => {
    try {
        // Validate input data (simplistic example for now)
        if (!req.body || !req.body.totalAmount || req.body.orderedProducts.length === 0) {
            return res.status(400).json({ success: false, error: 'Invalid order data' });
        }

        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, error: (error as Error).message });
    }
};

export const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (order) {
            res.status(200).json({ success: true, data: order });
        } else {
            res.status(404).json({ success: false, error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error:  (error as Error).message });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        if (!Object.values(OrderStatus).includes(req.body.status)) {
            return res.status(400).json({ success: false, error: 'Invalid order status' });
        }

        const order = await Order.findById(req.params.orderId);
        if (order) {
            order.status = req.body.status;
            const updatedOrder = await order.save();
            res.status(200).json({ success: true, data: updatedOrder });
        } else {
            res.status(404).json({ success: false, error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error:  (error as Error).message });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const result = await Order.deleteOne({ _id: req.params.orderId });
        if (result.deletedCount && result.deletedCount > 0) {
            res.status(200).json({ success: true, message: 'Order removed' });
        } else {
            res.status(404).json({ success: false, error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error:  (error as Error).message });
    }
};
