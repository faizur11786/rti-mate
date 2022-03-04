import { combineReducers } from 'redux'


let initialState = {
    user: "",
    token: "",
}

function counterReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case "USER_DATA_UPDATE":
            return { ...state, user: action.payload }
        case "SAVE_TOKEN":
            return { ...state, token: action.payload }
        case "LOGOUT":
            return { ...state, token: "", user: "" }
        default:
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    auth: counterReducer,
}

export default combineReducers( reducers )