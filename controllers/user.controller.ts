import { CatchAsyncErrors } from "../middleware/catch-async-error";
import { Request, Response, NextFunction } from "express";
import userModal from "../models/user.model";
import ErrorHandler from "../utils/error-handler";

export const getAllUsers = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userModal.find({});

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const addUsers = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      await userModal.create({
        name,
        email,
        password,
      });

      res.status(200).json({
        success: true,
        message: "create successful",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const getUserById = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user = await userModal.findById(id);

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const updateUserById = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      await userModal.findByIdAndUpdate(id, {
        name,
        email,
      });

      const user = await userModal.findById(id);
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const deleteUserById = CatchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user = await userModal.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "delete oke",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);
