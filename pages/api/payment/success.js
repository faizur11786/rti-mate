const crypto = require( 'crypto' );
import nextConnect from "next-connect";
import { updateOrder } from "@/lib/db/payment";

const handler = nextConnect()

export default handler.post( async ( req, res ) => {
    try {
        const {
            id: razorpayPaymentId,
            order_id: orderCreationId,
            status
        } = req.body.payload.payment.entity
        if ( !req.headers["x-razorpay-signature"] ) {
            return res.status( 400 ).json( { message: 'Transaction not legit!' } );
        }
        await updateOrder( orderCreationId, {
            paymentId: razorpayPaymentId,
            signature: req.headers["x-razorpay-signature"],
            success: true,
            status: status,
        } )
        res.json( {
            message: "success",
            order: {
                orderId: orderCreationId,
                paymentId: razorpayPaymentId,
            }
        } );
    } catch ( error ) {
        res.status( 500 ).json( { message: "Something went wrong", error } )
    }
} )