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
    console.log("Create Product Request Body: ", req.body);
    const newProduct: IProductDocument = new Product(req.body);
    console.log("is a new product created", newProduct);
    await newProduct.save();
    console.log("Saved product", newProduct);
    res.status(201).json(newProduct);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating product" }).end();
    return;
  }
};

export const createMultipleProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const products: IProductDocument[] = req.body;

  if (!Array.isArray(products)) {
    res.status(400).json({ message: "Expected an array of products" }).end();
    return;
  }

  try {
    const createdProducts = await Product.insertMany(products);
    res.status(201).json(createdProducts).end();
  } catch (error) {
    res.status(500).json({ message: "Error creating products" }).end();
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
