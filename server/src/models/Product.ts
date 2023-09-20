/* eslint-disable no-useless-escape */
import mongoose, { Document, Schema } from "mongoose";

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
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 1000 // Assuming you want to limit names to 1000 characters as per test
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0 // price cannot be negative
  },
  size: [
    {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  ],
  color: [
    {
      type: String,
      trim: true,
      minlength: 1,
      validate: [
        colorArrayValidator,
        "{PATH} must have at least 1 color and all colors must be non-empty."
      ]
    }
  ],
  imageUrl: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    validate: {
      validator: (v: string): boolean => {
        // Improved regex pattern for URL validation
        const urlRegex =
          /^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        return urlRegex.test(v);
      },
      message: (props): string => `${props.value} is not a valid URL!`
    }
  },
  stockCount: {
    type: Number,
    required: true,
    min: 0 // stock count cannot be negative
  }
});

function colorArrayValidator(val: string[]): boolean {
  if (!val.length) return false;

  for (const color of val) {
    if (!color) return false;
  }

  return true;
}

export const Product = mongoose.model<IProductDocument>(
  "Product",
  productSchema
);
