import { NextFunction, Request, Response } from "express";
import { CatchAsyncErrors } from "../middleware/catch-async-error";
import ErrorHandler from "../utils/error-handler";
import userModal from "../models/user.model";
import { uploadImageToCloudinary } from "../utils/cloudinary";
import productModel from "../models/product.model";



export const createProduct = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, description, thumbnail, price} = req.body

        let thumbnailData: { public_id: string, url: string } | null = null;
        if(thumbnail) {
            const myCloud = await uploadImageToCloudinary(thumbnail, "orchid", 150)
       
            thumbnailData = {
                public_id: myCloud.public_id,
                url: myCloud.url,
            }
        }

        await productModel.create({
            name,
            description,
            thumbnail: thumbnailData,
            price
        })

        res.status(200).json({
            success: true,
            message: "Create product successfull"
        })



    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


// update info product role:(staff-admin) --TODO


// get-all infor product role:(staff-admin) --TODO


// delete product role:(staff-admin) --TODO