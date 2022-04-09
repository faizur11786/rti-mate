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

export const updateOrder = async ( orderId, newPaymentObject ) => {
    await dbConnect()
    const paymentData = await payment.findOneAndUpdate( { orderId: orderId }, newPaymentObject, { new: true } )
    return paymentData
}

export const getOrderData = async ( orderId ) => {
    await dbConnect()
    const paymentData = await payment.findOne( { orderId }, "-__v" )
    return paymentData
}