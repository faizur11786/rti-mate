const crypto = require( 'crypto' );
import { getOrderData } from "@/lib/db/payment";
import nextConnect from "next-connect";

const handler = nextConnect()

export default handler.get( async ( req, res ) => {
    try {
        const orderId = req.query.orderId;
        const order = await getOrderData( orderId )
        console.log( "order ", order );
        if ( !order ) {
            return res.status( 404 ).json( {
                status: 404,
                message: "Order not found"
            } )
        }
        res.json( {
            message: "success",
            order
        } );
    } catch ( error ) {
        res.status( 500 ).json( { message: "Something went wrong", error } )
    }
} )