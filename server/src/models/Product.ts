// models/Product.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IProductDocument extends Document {
    name: string;
    description: string;
    price: number;
    size: string[];
    color: string[];
    imageUrl: string;
    stockCount: number;
}

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    size: [{ type: String, required: true }],
    color: [{ type: String, required: true }],
    imageUrl: { type: String, required: true },
    stockCount: { type: Number, required: true },
});

export const Product = mongoose.model<IProductDocument>('Product', productSchema);
