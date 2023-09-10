import jwt from "jsonwebtoken";

export const generateToken = (userId: string, role: string): string => {
  const secret = process.env.JWT_SECRET || "YOUR_SECRET_KEY";
  return jwt.sign({ _id: userId, role }, secret, { expiresIn: "1h" });
};
