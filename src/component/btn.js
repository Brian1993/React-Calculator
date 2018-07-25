import React, { Component } from 'react';
import './../_scss/btn.css';

const Btn = (props) =>{
    return (
        <div  onClick={props.event} className={`btn ${props.class}`} data-id={props.id} data-value={props.value} >
            {props.text}
        </div>
    )

} 
export default Btn;