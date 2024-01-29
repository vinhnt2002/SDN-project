
import express from "express"
import { authorized, isAuthenticated } from "../middleware/auth";
import { createAuction, getAllAuction, getAuctionById } from "../controllers/auction.controller";

const auctionRouter = express.Router()

auctionRouter.post("/create-auction", isAuthenticated, authorized("admin", "staff"), createAuction)

auctionRouter.get("/auctions", isAuthenticated, authorized("admin", "staff"), getAllAuction)

auctionRouter.get("/auction/auctionId", isAuthenticated, authorized("admin", "staff"), getAuctionById)

export default auctionRouter;