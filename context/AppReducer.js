export const initialState = {
    auth: {
        token: "",
        user: {}
    },
    form: {}
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
        case "SAVE_FORM_DATA":
            return {
                ...state,
                form: { ...state.form, [action.payload.name]: action.payload.value }
            };
        case "REMOVE_FORM_DATA":
            return {
                ...state,
                form: { ...state.form, [action.payload.name]: "" }
            };
        case "CLEAR_FORM_DATA":
            return {
                ...state,
                form: {}
            }
        case "LOGOUT":
            return { ...state, auth: { user: "", token: "" } }
    }
};