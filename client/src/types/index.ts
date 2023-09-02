export interface IUser {
    _id: string;
    name: string;
    email: string;
    address: string;
    orderHistory: string[];
    role: UserRole;
}

export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    size: string[];
    color: string[];
    imageUrl: string;
    stockCount: number;
}

export interface IOrder {
    _id: string;
    customerDetails: {
        name: string;
        email: string;
        address: string;
    };
    orderedProducts: {
        productId: string;
        quantity: number;
    }[];
    totalAmount: number;
    status: OrderStatus;
    paymentId: string;
}

export interface IJwtPayload {
    _id: string;
    role: UserRole;
}

export enum UserRole {
    ADMIN = "admin",
    CUSTOMER = "customer"
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
