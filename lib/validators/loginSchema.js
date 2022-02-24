import { string } from "yup";
import { object } from "yup";

const loginSchema = object( {
    email: string()
        .required( "Email is required" )
        .email( "Email must be a valid email address" ),
    referenceNo: string()
        .required( "Reference Number is required" )
        .min( 10, "Reference Number must be at least 6 characters" )
        .max( 16, "Reference Number must be at most 20 characters" ),
} )

export default loginSchema