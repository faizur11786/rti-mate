import payment from "../../models/payment";
import dbConnect from "../mongodb";



export const createOrder = async ( order ) => {
    await dbConnect()
    const paymentObject = {
        orderId: order.id,
        currency: order.currency,
        success: false,
        amount: order.amount / 100,
        status: order.status,
    }
    const paymentData = await payment.create( paymentObject )
    return paymentData
}