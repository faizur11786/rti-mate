// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/mongodb";
import Article from "../../models/Article";
import User from "../../models/User";
import generateId from "../../utils/generateId";

export default async function handler ( req, res ) {
  await dbConnect()
  const { method } = req;
  if ( method == "POST" ) {
    try {
      const { email } = req.body;
      // LET'S CHECK USER ALREADY EXISTS
      const userExists = await User.findOne( { email } );
      // IF USER IS NOT ALREADY EXISTS THEN GO TO 'IF' BODY THEN CREATE A BRAND USER AND CREATE ARTICLE

      if ( !userExists ) {
        // CREATE NEW USER, ARTICAL AND RETURN RESPONSE 
        const user = await createUser( req.body )
        const article = await createArtical( req.body, user._id );
        return res
          .status( 200 )
          .json( {
            message: "Application and user Created!",
            article: { ...article._doc, ...user._doc }
          } )
      }

      // CREATE ARTICAL WITH EXISTSING USER AND RETURN RESPONSE
      const article = await createArtical( req.body, userExists._id );
      return res
        .status( 200 )
        .json( {
          message: "Application Submited for Exists User!",
          article: { ...article._doc, ...userExists._doc }
        } )

    } catch ( error ) {
      res.status( 400 ).json( { message: "Something went wrong", error } )
    }
  } else {
    res.status( 400 ).json( { message: "Only post method is allowed for this request" } )
  }
}



async function createArtical ( artical, userID ) {
  let newArticle = {
    applicant: artical.name,
    ...artical,
    belongTo: userID,
  }
  const article = await Article.create( newArticle )
  return article
}

async function createUser ( user ) {
  const { name, email, mobile } = user;
  let userData = {
    name,
    email,
    mobile,
    arnNo: await generateId( "BR" ),
    role: "user"
  }
  const createdUser = await User.create( userData );
  return createdUser
}