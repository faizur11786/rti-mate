// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/mongodb";
import articleSchema from "../../lib/validators/articalSchema";
import Article from "../../models/article";
import User from "../../models/user";
import generateId from "../../utils/generateId";

export default async function handler ( req, res ) {
  await dbConnect()
  const { method } = req;
  if ( method === "POST" ) {
    try {
      const { email } = req.body
      console.log( req.body );
      try {
        await articleSchema
          .camelCase()
          .validate( req.body, { abortEarly: false } );

        // // LET'S CHECK USER ALREADY EXISTS
        const userExists = await User.findOne( { email } );
        // // // IF USER IS NOT ALREADY EXISTS THEN GO TO 'IF' BODY THEN CREATE A BRAND USER AND CREATE ARTICLE

        if ( !userExists ) {
          // CREATE NEW USER, ARTICAL AND RETURN RESPONSE
          const user = await createUser( req.body )
          const article = await createArtical( req.body, user._id );
          await User.findOneAndUpdate( { _id: user._id }, { referenceNo: article.referenceNo } )
          return res
            .status( 200 )
            .json( {
              message: "Application and user Created!",
              article: article
            } )
        }

        // // // CREATE ARTICAL WITH EXISTSING USER AND RETURN RESPONSE
        const article = await createArtical( req.body, userExists._id );
        await User.findOneAndUpdate( { _id: userExists._id }, { referenceNo: article.referenceNo } )
        return res
          .status( 200 )
          .json( {
            message: "Application Submited for Exists User!",
            article: article
          } )
      }
      catch ( error ) {
        return res.status( 400 ).json( { error: error.errors } );
      }
    } catch ( error ) {
      res.status( 400 ).json( { message: "Something went wrong", error } )
    }
  } else {
    res.status( 400 ).json( { message: "Only POST request are allowed." } )
  }
}

async function createArtical ( artical, userID ) {
  let newArticle = {
    applicant: artical.name,
    ...artical,
    referenceNo: await generateId( artical.isoCode ),
    belongTo: userID,
  }
  const article = await Article.create( newArticle )
  return article
}

async function createUser ( user ) {
  let userData = {
    ...user,
    role: "user"
  }
  const createdUser = await User.create( userData );
  return createdUser
}