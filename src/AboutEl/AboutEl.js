import React from 'react';
import './AboutEl.css';

export default function AboutEl(props) {
    return (
        <div className="info">
            <p>
                Выбран пользователь <strong>{props.datarow.firstName + ' ' + props.datarow.lastName}</strong>
            </p>
            <p>Описание:</p>
            <hr/>
            <textarea name="desc" rows="3" cols="180" value={props.datarow.description} /> 
            <hr/>
            <p>Адрес проживания: <strong>{props.datarow.address.streetAddress}</strong></p>
            <p>Город: <strong>{props.datarow.address.city}</strong></p>
            <p>Провинция/штат: <strong>{props.datarow.address.state}</strong></p>
            <p>Индекс: <strong>{props.datarow.address.zip}</strong></p>
        </div>
    )
}
