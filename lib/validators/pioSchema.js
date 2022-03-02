import { object, string, number } from "yup"

const pioSchema = object( {
    orgName: string().required( "Organization Name is a required field" ),
    orgId: string().optional(),
    PIOName: string().required( "PIO Name is a required field" ),
    orgAddress: string().required( "Organization Address is a required field" ),
    state: string().required( "Organization State is a required field" ),
    district: string().required( "Organization District is a required field" ),
    block: string().required( "Organization Block is a required field" ),
    pinCode: number()
        .required( "Organization Pin Code is a required field" )
        .min( 6, "Pin Code should be atleast 6 characters long." )
        .positive( "Pin Code should be a positive number." ),
    rtiFeePayTo: string().required( "RTI Fee Pay To is a required field" ),
    payableAt: string().required( "Payable At is a required field" ),
    faa: string().required( "FIRST APPELLATE AUTHORITY is a required field" ),
    additionalInfo: string()
        .optional()
        .min( 10, "Additional Info should be atleast 10 characters long." ),
}
)
export default pioSchema