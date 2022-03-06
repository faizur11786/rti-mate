import dbConnect from "../../lib/mongodb"
import restHandler from "../../lib/restHandler"
import jwt from "jsonwebtoken"
const key = "hdskfjbdsofg"
import loginSchema from "../../lib/validators/loginSchema"
import User from "../../models/user"
import nextConnect from "next-connect"
const handler = nextConnect()

export default handler.post( async ( req, res ) => {
    await dbConnect()
    try {
        await loginSchema.validate( req.body, { abortEarly: false } )
        const { email, referenceNo } = req.body
        const user = await User.findOne( { email } )
        if ( !user ) {
            return res.status( 400 ).json( { message: "User not found" } )
        }
        if ( user.referenceNo !== referenceNo ) {
            return res.status( 400 ).json( { message: "Reference number is not correct" } )
        }
        const responseUser = {
            _id: user._id,
            email: user.email,
            role: user.role,
            mobile: user.mobile,
            referenceNo: user.referenceNo
        }
        const token = jwt.sign( responseUser, key, { expiresIn: "1h" } )
        res.status( 200 ).json( {
            message: "Login Successful", user: responseUser, token
        } )
    } catch ( error ) {
        res.status( 400 ).json( { message: "Something went wrong", error: error.errors } )
    }
} )