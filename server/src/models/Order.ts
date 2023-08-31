// models/Order.ts

import mongoose, { Document, Schema } from 'mongoose';
import { OrderStatus } from '../types';


interface OrderDocument extends Document {
    customerDetails: {
        name: string;
        email: string;
        address: string;
    };
    orderedProducts: {
        productId: Schema.Types.ObjectId;
        quantity: number;
    }[];
    totalAmount: number;
    status: OrderStatus;
    paymentId: string;
}

const orderSchema = new Schema({
    customerDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
    },
    orderedProducts: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: Object.values(OrderStatus), required: true },
    paymentId: { type: String, required: true },
});

export const Order = mongoose.model<OrderDocument>('Order', orderSchema);
