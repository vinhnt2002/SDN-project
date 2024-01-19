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
