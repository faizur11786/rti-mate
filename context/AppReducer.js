export const initialState = {
    auth: {
        token: "",
        user: {}
    }
};
export const AppReducer = ( state, action ) => {
    switch ( action.type ) {
        case "INIT_STORED":
            return action.payload
        case "SAVE_USER":
            return {
                ...state,
                auth: { ...state.auth, user: action.payload },
            }
        case "SAVE_TOKEN":
            return {
                ...state,
                auth: { ...state.auth, token: action.payload },
            };
        case "LOGOUT":
            return { ...state, auth: { user: "", token: "" } }
    }
};