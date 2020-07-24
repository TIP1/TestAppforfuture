import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className="wrapper load">
            <div className="LoaderCont">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <p>Loading...</p>
            </div>
        </div>
    )
}
