import React from 'react'

export default function Table(props) {


    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={props.sortFunc.bind(null, 'id')} >id</th>
                    <th onClick={props.sortFunc.bind(null, 'firstName')} >firstName</th>
                    <th onClick={props.sortFunc.bind(null, 'lastName')} >lastName</th>
                    <th onClick={props.sortFunc.bind(null, 'email')} >email</th>
                    <th onClick={props.sortFunc.bind(null, 'phone')} >phone</th>
                </tr>
                </thead>
                <tbody>
                    {   
                        props.data.map(item => (
                            <tr key={item.id + item.phone}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
