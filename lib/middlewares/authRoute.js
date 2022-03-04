import jwt from "jsonwebtoken"

const key = "hdskfjbdsofg"
const authRoute = ( request, response, next ) => {
    response.header( "Access-Control-Allow-Origin", "*" );
    // CHECK IF USER HAS AUTHORIZATION TOKEN AVAILABLE. AFTER THAT, CALL NEXT() FUNCTION
    // PULL OUT SOME DATA FROM THE REQUEST OBJECT
    const { authorization } = request.headers
    if ( authorization ) {
        try {
            const verifyToken = jwt.verify( authorization, key )
            if ( verifyToken ) {
                next()
            }
        } catch ( error ) {
            return response.status( 401 ).json( { message: "Access token expired", error } )
        }

    } else {
        return response.status( 401 ).json( { message: "Unauthorized" } )
    }
}

export default authRoute