import express from "express";
import { authorized, isAuthenticated } from "../middleware/auth";
import { createProduct, getAllProducts, getProductById, updateProductWIthId } from "../controllers/product.controller";

 const productRouter = express.Router()

 productRouter.post("/create-product", isAuthenticated, authorized("admin", "staff"), createProduct)

 productRouter.get("/products", isAuthenticated, authorized("admin", "staff"), getAllProducts)
 
 productRouter.get("/product/:productId", isAuthenticated, authorized("admin", "staff"), getProductById)

 productRouter.put("/update-product/:productId", isAuthenticated, authorized("admin", "staff"), updateProductWIthId)

 export default productRouter