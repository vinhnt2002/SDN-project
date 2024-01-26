import mongoose, { Document, Model, Schema } from "mongoose";
require("dotenv").config();

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  description: string;
  origin: string;
}

const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please enter your name product"],
    },
    price: {
      type: Number,
      // required: [true, "Please enter your price"],
    },
    quantity: {
      type: Number,
      // required: [true, "Please enter your quantity"],
    },
    description: {
      type: String,
      // required: [true, "Please enter your description"],
    },
    origin: {
      type: String,
      // required: [true, "Please enter origin"],
    },
  },
  { timestamps: true }
);

const productModal = mongoose.model<IProduct>("Product", productSchema);

export default productModal;
