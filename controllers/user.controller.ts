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

export const testGetUserById = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const user = await userModal.findById(userId)
      return res.status(200).json({
        success: true,
        user
      })
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const testCreateUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {name, email, password} = req.body;
      const existedUser =  await userModal.findOne({email});

      if(existedUser) {
        return next(new ErrorHandler("Email is already existed", 400));
      }

      const user = await userModal.create({
        name,
        email,
        password,
        isVerified: true
      })

        return res.status(200).json({
        sucess: true,
        user
      })
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const testUpdateUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const {name, email, password} = req.body;
      const existedUser =  await userModal.findOne({email});
      const user = await userModal.findByIdAndUpdate(userId, req.body);
    
    if(existedUser) {
      return next(new ErrorHandler("Existed Email", 400));
    }
    const updatedUser = await userModal.findById(userId);
    return res.status(200).json({
      success: true,
      updatedUser
    })
    } catch (error:any) {
      return next(new ErrorHandler(error.message, 500));
    }
    
  }
);

export const testDeleteUser = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
   try {
    const userId = req.params.id;
    const user = await userModal.findByIdAndDelete(userId);
    return res.status(200).json({
      success: true,
      user
    })
   } catch (error:any) {
    return next(new ErrorHandler(error.message, 500));
   }
  }
);
