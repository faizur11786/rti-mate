import authRoute from "../../../lib/middlewares/authRoute";
import restHandler from "../../../lib/restHandler";
import Razorpay from "razorpay";
import nextConnect from "next-connect";
import { createOrder } from "@/lib/db/payment";
import { updataArticle } from "@/lib/db/article";

const handler = nextConnect()
// handler.use( authRoute )


export default handler.post( async ( req, res ) => {
    const { amount, articleId } = req.body;

    if ( !amount ) {
        return res.status( 400 ).json( { message: "Amount is required" } )
    }
    try {
        const instance = new Razorpay( {
            key_id: "rzp_test_6iPgcJxAqs4LRu",
            key_secret: "zfB5RIrlOK58358IKrSDv9iF",
        } )

        if ( !instance ) {
            return res.status( 400 ).json( { message: "Razorpay not configured" } );
        }

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "order_rcptid_11",
        }
        const order = await instance.orders.create( options )
        if ( !order ) {
            res.status( 400 ).json( { message: "Order not created" } )
        }
        const _order = await createOrder( order )
        await updataArticle( articleId, {
            payment: _order._id
        } )
        return res.status( 201 ).json( { message: "Order created successfully", order } )
    } catch ( error ) {
        res.status( 500 ).json( { message: "Something went wrong", error } )
    }
} )