import { object, string } from "yup"


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const articleSchema = object( {
    applicant: string()
        .required( "Please provide a Applicant Name for this article." )
        .min( 3, "Applicant Name should be atleast 3 characters long." ),
    fatherName: string().optional(),
    motherName: string().optional(),
    mobile: string().matches( phoneRegExp, "Phone number is not valid" ),
    email: string().required().email( "Email is not valid" ),
    address: string()
        .required( "Please provide an Address for this article." )
        .min( 8, "Address should be atleast 8 characters long." ),
    rtiQuery: string()
        .required( "Please provide RTI Query" )
        .min( 10, "RTI Query should be atleast 10 characters long." ),
    organizationAddress: string().required( "Please provide Organization Address" )
        .min( 8, "Address should be atleast 8 characters long." ),
    orgState: string().required( "Organization State is a required field" ),
} )


export default articleSchema