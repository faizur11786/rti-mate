import authRoute from "../../lib/middlewares/authRoute";
import restHandler from "../../lib/restHandler";

import nextConnect from "next-connect";

const handler = nextConnect()

handler.use( authRoute )


export default handler.use( authRoute ).post( async ( req, res ) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature } = req.body
        res.json( { data: "success FUnk", ffunkcthisshit: req.body } );
    } catch ( error ) {
        res.status( 500 ).json( { message: "Something went wrong", error } )
    }
} )