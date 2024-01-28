import mongoose, { Document, Model, Schema } from "mongoose";

export interface IAuction extends Document {
  productId: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  status: string;
  bids: Array<{
    userId: string;
    amount: number;
    timestamp: Date;
  }>;
  registeredUsers: Array<{ userId: string }>;
}

const auctionSchema: Schema<IAuction> = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", 
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "ended"],
      default: "pending",
    },
    bids: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        amount: Number,
        timestamp: Date,
      },
    ],
    registeredUsers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true }
);

const AuctionModel: Model<IAuction> = mongoose.model<IAuction>(
  "Auction",
  auctionSchema
);

export default AuctionModel;
