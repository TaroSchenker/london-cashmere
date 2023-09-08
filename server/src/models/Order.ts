// models/Order.ts
/* eslint-disable no-useless-escape */

import mongoose, { Document, Schema } from "mongoose";
import { OrderStatus } from "../types";

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

const orderSchema = new Schema(
  {
    customerDetails: {
      name: { type: String, required: true, minlength: 2, maxlength: 100 },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please enter a valid email"],
      },
      address: { type: String, required: true, maxlength: 300 },
    },
    orderedProducts: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1, max: 100 },
      },
    ],
    totalAmount: { type: Number, required: true, min: 0, max: 1000000 },
    status: {
      type: String,
      enum: Object.values(OrderStatus),
      default: "Pending",
      required: true,
    },
    paymentId: { type: String, required: true },
  },
  { timestamps: true },
);

export const Order = mongoose.model<OrderDocument>("Order", orderSchema);
