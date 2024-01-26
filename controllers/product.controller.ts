import { Express, Request, Response, NextFunction } from "express";
import { CatchAsyncErrors } from "../middleware/catch-async-error";
import productModal, { IProduct } from "../models/product.model";
import ErrorHandler from "../utils/error-handler";

export const addProduct = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, price, quantity, description, origin } = req.body;
      await productModal.create({ name, price, quantity, description, origin });
      res.status(201).json({
        success: true,
        message: "Create success",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getAllProduct = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productModal.find();
      console.log("hellp test commit");
      res.status(201).json({
        success: true,
        message: "Create success",
        data: products,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const getProductById = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const product = await productModal.findById(productId);
      if (!product) {
        return next(new ErrorHandler("Product not found", 404));
      }
      res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const updateProduct = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const productData: Partial<IProduct> = req.body;
      const updatedProduct = await productModal.findByIdAndUpdate(
        productId,
        productData,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedProduct) {
        return next(new ErrorHandler("Product not found", 404));
      }
      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const deleteProduct = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await productModal.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return next(new ErrorHandler("Product not found", 404));
      }
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: deletedProduct,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
