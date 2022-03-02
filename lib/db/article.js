
import Article from "../../models/article";
import dbConnect from "../mongodb";
import jwt from "jsonwebtoken";

export const getUserArtileByRefNo = async ( referenceNo ) => {
    await dbConnect()
    const article = await Article.findOne( { referenceNo }, "-_id -__v" );
    return article
}

export const getUserArticles = async ( accessToken ) => {
    await dbConnect()
    // Frist DECODE THE TOKEN THEN GET THE USER ID AND FIND THE USER ARTICLES IN THE DATA BASE
    const decode = jwt.decode( accessToken );
    if ( decode.role === "admin" ) {
        const article = await Article.find().populate( "belongTo", "-_id email mobile referenceNo role" );
        return article
    }
    const articles = await Article
        .find( {
            belongTo: decode._id
        }, "-_id -__v" )
        .populate( "belongTo", "-_id email mobile referenceNo role" )
    return articles
}