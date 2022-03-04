import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from "../reducers/auth"
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "rti-mate",
    storage: storage,
};

const persistedReducer = persistReducer( persistConfig, reducer );

let middlewares = []
middlewares.push( thunk );

if ( process.env.NODE_ENV === 'development' ) {
    const { logger } = require( 'redux-logger' );
    middlewares.push( logger );
}


export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware( ...middlewares )
    )
);


export const persistor = persistStore( store );
