import React from 'react';
import './Button.css';

const Button = ({ btnTitle}) => {
    return (
        <div className='btn-wrapper'>
            <button>{btnTitle}</button>
        </div>
    )
}

export default Button;