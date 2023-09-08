// models/User.ts

import mongoose, { Document, Schema } from "mongoose";
import { UserRole } from "../types";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  hashedPassword: string;
  address: string;
  orderHistory: Schema.Types.ObjectId[];
  role: UserRole;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  address: { type: String, required: true },
  orderHistory: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.CUSTOMER,
  },
});
userSchema.index({ email: 1 }, { unique: true });
export const User = mongoose.model<IUserDocument>("User", userSchema);
