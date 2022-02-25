import { getUserArtileByRefNo } from "../../../lib/db/article";
import authRoute from "../../../lib/middlewares/authRoute";
import restHandler from "../../../lib/restHandler";

export default restHandler.use( authRoute ).get( async ( req, res ) => {
    const { refNo } = req.query;
    const article = await getUserArtileByRefNo( refNo )

    if ( !article ) {
        return res.status( 400 ).json( { message: "Article not found" } )
    }

    res.status( 200 ).json( { message: "Success", article } );
} )