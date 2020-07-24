import React from 'react';
import './ModeSelector.css';

export default function ModeSelector(props) {

    const smallVol = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    const bigVol = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return (
        <div className="backstage">            
                <button onClick={() => props.onSelect(smallVol)} className="btn btn-primary">Маленький объём данных</button>
                <button onClick={() => props.onSelect(bigVol)} className="btn btn-secondary">Большой объём данных</button>
        </div>
    )
}
