import authRoute from "../../../lib/middlewares/authRoute";
import restHandler from "../../../lib/restHandler";

export default restHandler.use( authRoute ).post( async ( req, res ) => {
    const { body } = req
    console.log( body );
    res.json( "ok" );
} );