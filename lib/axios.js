import axios from "axios"
import { store } from '../redux/store';

export const withoutAuthAxios = () => {
    return axios.create( {
        baseURL: "http://localhost:3000",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    } );
};

export const aauthAxios = () => {
    let token = store.getState( 'state' ).auth.token;
    return axios.create( {
        baseURL: "http://localhost:3000",
        headers: {
            Authorization: `${token ? `${token}` : null}`,
            "Access-Control-Allow-Origin": "*",
        },
    } )
}