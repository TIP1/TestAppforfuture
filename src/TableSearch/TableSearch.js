import React, {useState} from 'react';
import './TableSearch.css';

export default function TableSearch(props) {

    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
    }
    return (
        <div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    value={value} 
                    onChange={valueChangeHandler} />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        onClick={() => props.onSearch(value)}>
                            Search
                    </button>
                </div>
            </div> 
        </div>
    )
}
