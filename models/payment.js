import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema( {
    orderId: { type: String },
    amount: { type: String },
    paymentId: { type: String },
    signature: { type: String },
    success: { type: Boolean },
} )

export default mongoose.models.payment || mongoose.model( "payment", PaymentSchema )