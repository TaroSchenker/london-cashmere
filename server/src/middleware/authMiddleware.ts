import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IJwtPayload, UserRole } from "../types";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
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
): Response | void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Authentication token required" });
  }

  const secretToken = process.env.SECRET_TOKEN;
  if (!secretToken) {
    return res.status(403).json({ message: "Secret token not found" });
  }
  try {
    const decoded = jwt.verify(token, secretToken) as JwtPayload & IJwtPayload;
    if (typeof decoded === "object" && "_id" in decoded) {
      // Check for _id
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: "Invalid token format" });
    }
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (req.user && req.user.role === UserRole.ADMIN) {
    next();
  } else {
    return res.status(403).json({ message: "Access denied" });
  }
};

export default { authenticate, isAdmin };
