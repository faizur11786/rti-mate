import authRoute from "@/lib/middlewares/authRoute"
import pioSchema from "@/lib/validators/pioSchema"
import nextConnect from "next-connect"

const handler = nextConnect()
handler.use( authRoute )

export default handler.post( async ( req, res ) => {
    try {
        const values = await pioSchema.validate( req.body, { abortEarly: false } )
        if ( !values ) {
            return res.status( 400 ).json( { error: "Invalid Data" } )
        }

        res.statusCode = 201
        res.json( { message: "Success" } )

    }
    catch ( error ) {
        res.status( 400 ).json( { error: error.errors } )
    }
    // res.status( 400 ).json( { error: "error.errors" } )
} )