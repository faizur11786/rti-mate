import nextConnect from "next-connect";

const restHandler = nextConnect( {
    onError: ( error, request, response, next ) => {
        response.status( "500" ).end( "Something broke!", error )
    },
    onNoMatch: ( request, response ) => {
        response.status( "404" ).end( "Page is not found!" )
    }
} )

export default restHandler