import axios from "axios"
import { store } from '../redux/store';

export const withoutAuthAxios = () => {
    return axios.create( {
        baseURL: "http://localhost:3000",
        // baseURL: "https://stagging-token-api.aqarchain.io"
    } );
};

export const aauthAxios = () => {
    let token = store.getState( 'state' ).auth.token;
    return axios.create( {
        baseURL: "http://localhost:3000/api/",
        headers: {
            Authorization: `${token ? `${token}` : null}`,
        },
    } )
}