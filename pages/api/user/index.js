import nextConnect from "next-connect"
import authRoute from "../../../lib/middlewares/authRoute"
import restHandler from "../../../lib/restHandler"
import { getUser } from "../../../lib/db/user"
const handler = restHandler.use( authRoute )
    .post( async ( request, response ) => {
        response.json( { data: "yes" } )
    } )
    .get( async ( request, response ) => {
        response.json( { data: await getUser() } )
    } )

export default handler