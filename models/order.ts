import mongoose, { Document, Model, Schema } from "mongoose";


export interface IOrder extends Document {
    userId: string;
    productId: string;
    amount: number;
    status: string;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'User'
        },
        productId: {
            type: String,
            required: true
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'Product'
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'completed'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

const OrderModel: Model<IOrder> = mongoose.model<IOrder>("Order", orderSchema);

export default OrderModel;