import React from 'react'
import './Table.css'
export default function Table(props) {
    return (
        <div>
            { props.data ? 
            <table className="table">
                <thead>
                <tr>
                    <th onClick={props.sortFunc.bind(null, 'id')} >
                        id {props.namecolumn === 'id' ? 
                        (props.sort === 'asc' ? <p>&#9650;</p>:<p>&#9660;</p>) : null}
                    </th>
                    <th onClick={props.sortFunc.bind(null, 'firstName')} >
                        firstName {props.namecolumn === 'firstName' ? 
                        (props.sort === 'asc' ? <p>&#9650;</p>:<p>&#9660;</p>) : null}
                    </th>
                    <th onClick={props.sortFunc.bind(null, 'lastName')} >
                        lastName {props.namecolumn === 'lastName' ? 
                        (props.sort === 'asc' ? <p>&#9650;</p>:<p>&#9660;</p>) : null}
                    </th>
                    <th onClick={props.sortFunc.bind(null, 'email')} >
                        email {props.namecolumn === 'email' ? 
                        (props.sort === 'asc' ? <p>&#9650;</p>:<p>&#9660;</p>) : null}
                    </th>
                    <th onClick={props.sortFunc.bind(null, 'phone')} >
                        phone {props.namecolumn === 'phone' ? 
                        (props.sort === 'asc' ? <p>&#9650;</p>:<p>&#9660;</p>) : null}
                    </th>
                </tr>
                </thead>
                <tbody>
                    
                    {   
                        props.data.map(item => (
                            <tr key={item.id + item.phone} onClick={props.showRow.bind(null, item)}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                </tbody> 
                </table> : <p className="nores">no results</p>  }
        </div>
    )
}
