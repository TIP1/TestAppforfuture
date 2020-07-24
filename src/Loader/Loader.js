import React from 'react'
import './Loader.css'

export default function Loader(props) {
    if (!props.isLoaded) {
    return (
        <div className="wrapper load">
            <div className="LoaderCont">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <p>Loading...</p>
            </div>
        </div>
    )}
}
