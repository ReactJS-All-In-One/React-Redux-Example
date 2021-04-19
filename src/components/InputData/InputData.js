import React from 'react';
import './Input.css';

const inputdata = (props) => {
    return (
        <div className={'inputData'}>
            <div>
                <button className={'button-bg'} onClick={props.clicked}>{props.label}</button>
            </div>
        </div>
    )
}

export default inputdata;