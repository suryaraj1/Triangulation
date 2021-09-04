import React from 'react';
import './InputComponent.css';

const InputComponent = ({ inputLabel }) => {
    return (
        <div className='input-wrapper'>
            <div className='input-label-wrapper'>
                <p className='input-label'>{inputLabel}</p>
            </div>
            <div className='input-box-wrapper'>
                <input />
            </div>
        </div>
    )
}

export default InputComponent;