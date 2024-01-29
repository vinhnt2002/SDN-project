import mongoose, { Document, Model, Schema } from "mongoose";

export interface IAuction extends Document {
  productId: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  auctionStatus: string;
  auctionState: string;
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
    auctionStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    auctionState: {
      type: String,
      enum: ["upcoming", "open", "ended"],
      default: "upcoming",
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


// NOT FINSISH HERE
auctionSchema.pre<IAuction>('save', function(this: IAuction,next){
    if(this.isModified('auctionStatus') && this.auctionStatus === 'approved'){
      this.auctionState = 'upcoming';
    }

    next()
})

const auctionModel: Model<IAuction> = mongoose.model<IAuction>(
  "Auction",
  auctionSchema
);

export default auctionModel;
