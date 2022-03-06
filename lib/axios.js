import axios from "axios"

export const withoutAuthAxios = () => {
    return axios;
};

export const authAxios = () => {
    let token = JSON.parse( localStorage.getItem( "state" ) ).auth.token
    return axios.create( {
        headers: {
            Authorization: `${token ? `${token}` : null}`,
        },
    } )
}