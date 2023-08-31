import { ObjectId } from 'mongoose';

export interface IUser {
    _id: ObjectId;
    name: string;
    email: string;
    address: string;
    orderHistory: ObjectId[];
    role: UserRole;
}

export interface IProduct {
    _id: ObjectId;
    name: string;
    description: string;
    price: number;
    size: string[];
    color: string[];
    imageUrl: string;
    stockCount: number;
}

export interface IOrder {
    _id: ObjectId;
    customerDetails: {
        name: string;
        email: string;
        address: string;
    };
    orderedProducts: {
        productId: ObjectId;
        quantity: number;
    }[];
    totalAmount: number;
    status: OrderStatus;
    paymentId: string;
}

export enum UserRole {
    ADMIN = "Admin",
    CUSTOMER = "Customer"
}

export enum OrderStatus {
    PENDING = "Pending",
    PROCESSED = "Processed",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}

export interface AuthRequest extends Request {
    user: IUser;
}

export interface ErrorResponse {
    statusCode: number;
    message: string;
}

export interface PayPalResponse {
    paymentId: string;
    payerId: string;
    status: string; 
}

export interface ProductUpdate {
    name?: string;
    description?: string;
    price?: number;
    size?: string[];
    color?: string[];
    imageUrl?: string;
    stockCount?: number;
}
