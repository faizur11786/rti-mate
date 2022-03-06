import { useEffect, useReducer, createContext, useContext, useMemo } from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();
export function AppWrapper ( { children } ) {
    const [state, dispatch] = useReducer( AppReducer, initialState );
    useEffect( () => {
        if ( JSON.parse( localStorage.getItem( "state" ) ) ) {
            dispatch( {
                type: "INIT_STORED",
                payload: JSON.parse( localStorage.getItem( "state" ) ),
            } );
        }
    }, [] );


    useEffect( () => {
        if ( state !== initialState ) {
            localStorage.setItem( "state", JSON.stringify( state ) );
        }
    }, [state] );




    const contextValue = useMemo( () => {
        return { state, dispatch };
    }, [state, dispatch] );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext () {
    return useContext( AppContext );
}