import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/product.controller";

const productRouter = express.Router();
productRouter.post("/add_product", addProduct);
productRouter.get("/get_all_product", getAllProduct);
productRouter.get("/product/:id", getProductById);
productRouter.put("/update_product/:id", updateProduct);
productRouter.delete("/delete_product/:id", deleteProduct);

export default productRouter;
