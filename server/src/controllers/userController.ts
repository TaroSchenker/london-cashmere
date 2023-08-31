// controllers/userController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, address } = req.body;

  // Check if user with this email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password before saving the user
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password", hashedPassword);

  const user = new User({
    name,
    email,
    hashedPassword,
    address,
  });

  const savedUser = await user.save();
  console.log("savedUser", savedUser);
  res.status(201).json({ message: "User registered successfully" });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { _id: user.id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  ); // Replace 'YOUR_SECRET_KEY' with an actual secret key
  console.log("token", token);
  res.json({ token, userId: user.id });
};
