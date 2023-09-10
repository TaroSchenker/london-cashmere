import { Request, Response } from "express";
import { Product, IProductDocument } from "../models/Product";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json(products).end();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" }).end();
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" }).end();
      return;
    }
    res.status(200).json(product).end();
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product" }).end();
    return;
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct: IProductDocument = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct).end();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating product" }).end();
    return;
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" }).end();
      return;
    }
    res.status(200).json(updatedProduct).end();
  } catch (error) {
    res.status(500).json({ message: "Error updating product" }).end();
    return;
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" }).end();
      return;
    }
    res.status(200).json({ message: "Product deleted" }).end();
    return;
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" }).end();
    return;
  }
};
