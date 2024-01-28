import express from "express";
import { authorized, isAuthenticated } from "../middleware/auth";
import { createProduct } from "../controllers/product.controller";

 const productRouter = express.Router()

 productRouter.post("/create-product", isAuthenticated, authorized("admin", "staff"), createProduct)

 export default productRouter