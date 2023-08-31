// controllers/userController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { generateToken } from "../utils/generateToken";

export const registerUser = async (req: Request, res: Response) => {
  try {
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
    return res.status(201).json({ message: "User registered successfully" });  
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user.id, user.role);
    res.json({ token, userId: user.id });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
