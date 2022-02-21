import dbConnect from "../../lib/mongodb"

const handler = async ( req, res ) => {
    await dbConnect()
    const { method } = req
    if ( method !== "POST" ) {
        return res.status( 400 ).json( { message: `Method '${method}' are Not Allowed` } )
    }
}

export default handler