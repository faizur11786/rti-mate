import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema( {
    orderId: { type: String },
    amount: { type: String },
    currency: { type: String },
    paymentId: { type: String },
    signature: { type: String },
    success: { type: Boolean },
    status: { type: String },
}, { timestamps: true } )

export default mongoose.models.payment || mongoose.model( "payment", PaymentSchema )