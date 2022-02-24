import dbConnect from "../../lib/mongodb"
import restHandler from "../../lib/restHandler"
import jwt from "jsonwebtoken"
const key = "hdskfjbdsofg"
import loginSchema from "../../lib/validators/loginSchema"
import User from "../../models/User"

export default restHandler.post( async ( req, res ) => {
    await dbConnect()
    try {
        await loginSchema.validate( req.body, { abortEarly: false } )
        const { email, referenceNo } = req.body
        const user = await User.findOne( { email } )
        console.log( "user", user );
        if ( !user ) {
            return res.status( 400 ).json( { message: "User not found" } )
        }
        if ( user.refNum !== referenceNo ) {
            return res.status( 400 ).json( { message: "Reference number is not correct" } )
        }
        const responseUser = {
            _id: user._id,
            email: user.email,
            role: user.role,
            mobile: user.mobile,
            referenceNo: user.refNum
        }
        const token = jwt.sign( { responseUser }, key, { expiresIn: "20s" } )
        res.status( 200 ).json( { message: "Login Successful", user: responseUser, token } )
    } catch ( error ) {
        res.status( 400 ).json( { message: "Something went wrong", error: error.errors } )
    }
} )