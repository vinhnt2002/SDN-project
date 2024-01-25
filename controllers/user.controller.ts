import { CatchAsyncErrors } from "../middleware/catch-async-error";
import { Request, Response, NextFunction } from "express";
import userModal from "../models/user.model";
import ErrorHandler from "../utils/error-handler";

export const testGetAllUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {

      const users = await userModal.find({});
      return res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const addUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const{ name, email, password} = req.body;
        
      await userModal.create({
        name,
        email,
        password,
      });
      return res.status(200).json({
        success: true,
        message: "create successful",
      
      });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const updateUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const{id} = req.params;

      const{ name, email, password} = req.body;
        

      await userModal.findByIdAndUpdate(id,{
        name,
        email,
        password,
      });
      const users = await userModal.findById(id);
      return res.status(200).json({
        success: true,
        message: "update successful",
        users,
      });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
  }
);


export const deleteUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const{id} = req.params;

      await userModal.findByIdAndDelete(id);
      const users = await userModal.findById(id);
      return res.status(200).json({
        success: true,
        message: "delete successful",
        users,
      });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
  }
);