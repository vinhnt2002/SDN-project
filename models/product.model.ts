import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  price: number;
  auctionId: Schema.Types.ObjectId;
}

const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter info product"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    auctionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auction",
    },
  },
  { timestamps: true }
);


const ProductModel: Model<IProduct> = mongoose.model<IProduct>("Product", productSchema);

export default ProductModel;