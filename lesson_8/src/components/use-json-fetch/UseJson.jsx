import React from 'react'
import UseHook from './UseHook'

export default function UseJsonFetch() {

    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <div className="ui segments">
                    <UseHook url={process.env.REACT_APP_DATA_URL} />
                    <UseHook url={process.env.REACT_APP_ERROR_URL} />
                    <UseHook url={process.env.REACT_APP_LOADING_URL} />
                </div>
            </div>
        </div>
    )
}