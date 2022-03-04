import { withoutAuthAxios } from "@/lib/axios"
import axios from "axios";
import toast from "react-hot-toast";

export const login = data => __dispatch => {
    return new Promise( async ( resolve, reject ) => {
        await withoutAuthAxios().post( '/api/login', data )
            .then(
                response => {
                    __dispatch( { type: "SAVE_TOKEN", payload: response.data.token } )
                    __dispatch( { type: "USER_DATA_UPDATE", payload: response.data.user } )
                    resolve( response );
                }
            ).catch(
                error => reject( error.response.data )
            )
    } )
}