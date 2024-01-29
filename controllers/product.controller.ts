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

export const getAllProducts = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {

        const products = await productModel.find({});



        res.status(200).json({
            success: true,
            products
        })



    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500))
    }
})

export const getProductById = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId} = req.params

        
        if(!productId){
            return next(new ErrorHandler("Product ID not found",404))
        }
        
        const product = await productModel.findById(productId);

        if(!product){
            return next(new ErrorHandler("Product not found",404))
        }

        res.status(200).json({
            success: true,
            product
        })



    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


export const updateProductWIthId = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId} = req.params
        const data = req.body
        
        if(!productId){
            return next(new ErrorHandler("Product ID not found",404))
        }
        
        const product = await productModel.findByIdAndUpdate(productId, {data, new: true});

        res.status(200).json({
            success: true,
            product,
            message: "update successfully"
        })



    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


// update info product role:(staff-admin) --TODO


// get-all infor product role:(staff-admin) --TODO


// delete product role:(staff-admin) --TODO