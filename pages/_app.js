import React, {
    useReducer
} from 'react'
import '../styles/globals.css'
import ContextApp from './../context/App/ContextApp';
import ReducerApp from './../context/App/ReducerApp';
import StateApp from './../context/App/StateApp';

function MyApp({ Component, pageProps }) {
    const [stateApp, dispatchApp] = useReducer(ReducerApp, StateApp())
    return (
        <ContextApp.Provider value={{stateApp, dispatchApp}}>
            <Component {...pageProps} />
        </ContextApp.Provider>
    )
}

export default MyApp
