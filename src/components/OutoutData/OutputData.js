import React from 'react';
import './Output.css';

const outputdata =(props)=> {
    return(
        <div className={'title-head'}>
            <h4 style={{margin:'0px',padding:'0px'}}>{props.label}: {props.value}</h4>
        </div>
    )
}

export default outputdata;