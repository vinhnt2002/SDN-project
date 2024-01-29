import { NextFunction, Request, Response } from "express";
import { CatchAsyncErrors } from "../middleware/catch-async-error";
import ErrorHandler from "../utils/error-handler";
import auctionModel from "../models/auction.model";


// create
export const createAuction = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId, startTime, endTime} = req.body

        await auctionModel.create({productId, startTime, endTime})

        res.status(201).json({
            success: true,
            message: "Auction create successful"
        })

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500))
    }
})


// register to join auction --TODO


// update status product role(admin) -> pending -> approved --TODO


// update auction before event role(staff) --TODO


// view list auction live --not register to join (customer-guest) --TODO


// view list auction up --not register to join (customer-guest) --TODO


// view list auction  , role: (admin-staff)  --TODO


// bidding product in auction role(customer) --TODO


// 