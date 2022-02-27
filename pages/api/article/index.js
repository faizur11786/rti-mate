import { getUserArticles, getUserArtileByRefNo } from "../../../lib/db/article";
import authRoute from "../../../lib/middlewares/authRoute";
import restHandler from "../../../lib/restHandler";

export default restHandler.use( authRoute ).get( async ( req, res ) => {
    const { authorization } = req.headers;
    const refNo = req.query.refNo
    // const token = authorization.split( " " )[1];
    if ( refNo ) {
        const article = await getUserArtileByRefNo( refNo )
        if ( !article ) {
            return res.status( 400 ).json( { message: "Article not found" } )
        }
        return res.status( 200 ).json( { message: "Success", article } );
    }
    const articles = await getUserArticles( authorization )
    if ( !articles ) {
        return res.status( 400 ).json( { message: "Article not found" } )
    }
    res.status( 200 ).json( { message: "Success", articles } );
} )