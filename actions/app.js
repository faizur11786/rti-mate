import { authAxios, withoutAuthAxios } from "@/lib/axios"

export const getArticle = ( data ) => {
    return new Promise( async ( resolve, reject ) => {
        await authAxios().get( '/api/article', data )
            .then(
                response => {
                    resolve( response );
                }
            ).catch(
                error => reject( error.response.data )
            )
    } )
}

export const createArticle = ( data ) => {
    return new Promise( async ( resolve, reject ) => {
        await authAxios().post( '/api/apply', data )
            .then(
                response => {
                    resolve( response );
                }
            ).catch(
                error => reject( error.response.data )
            )
    } )
}