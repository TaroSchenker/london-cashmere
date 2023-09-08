// controllers/userController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import { generateToken } from "../utils/generateToken";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, address } = req.body;

    // Check if user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" }).end();
      return;
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = new User({
      name,
      email,
      hashedPassword,
      address
    });

    // const savedUser = await user.save();
    res.status(201).json({ message: "User registered successfully" }).end();
    return;
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" }).end();
    return;
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" }).end();
      return;
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid email or password" }).end();
      return;
    }

    const token = generateToken(user.id, user.role);
    res.json({ token, userId: user.id }).end();
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" }).end();
    return;
  }
};
