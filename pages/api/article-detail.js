import authRoute from "../../lib/middlewares/authRoute";
import restHandler from "../../lib/restHandler";

export default restHandler.use( authRoute ).get( async ( req, res ) => {
    res.status( 200 ).json( { message: "Hello World" } );
} )