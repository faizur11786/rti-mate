import axios from "axios"
import { store } from '../redux/store';

export const withoutAuthAxios = () => {
    return axios.create( {
        baseURL: "https://rti-mate.vercel.app/",
    } );
};

export const aauthAxios = () => {
    let token = store.getState( 'state' ).auth.token;
    return axios.create( {
        baseURL: "https://rti-mate.vercel.app/",
        headers: {
            Authorization: `${token ? `${token}` : null}`,
        },
    } )
}