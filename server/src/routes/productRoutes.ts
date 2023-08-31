import { Router } from "express";
import * as ProductController from "../controllers/productController";
import {authenticate, isAdmin} from "../middleware/authMiddleware";

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", authenticate, isAdmin, ProductController.createProduct);
router.put("/:id", authenticate, isAdmin, ProductController.updateProduct);
router.delete("/:id", authenticate, isAdmin, ProductController.deleteProduct);

export default router;
