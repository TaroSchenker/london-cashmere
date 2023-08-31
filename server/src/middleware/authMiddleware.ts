import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IJwtPayload, UserRole } from "../types";
declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload; // Use IJwtPayload instead of IUser
    }
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("token", token)
  if (!token) {
    console.log("no token")
    return res.status(403).json({ message: "Authentication token required" });
  }

  try {
    const decoded = jwt.verify(token, "YOUR_SECRET_KEY") as JwtPayload & IJwtPayload; 
    if (typeof decoded === "object" && "_id" in decoded) {  // Check for _id
      req.user = decoded; 
      next();
    } else {
      return res.status(403).json({ message: "Invalid token format" }); 
    }
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};



export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  console.log(" is admin req.user", req.user)
  if (req.user && req.user.role === UserRole.ADMIN) {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied' });
  }
};


export default { authenticate, isAdmin}
