import React from 'react';
import './Button.css';

const Button = ({ btnTitle, clickHandler }) => {
    return (
        <div className='btn-wrapper'>
            <button onClick={clickHandler}>{btnTitle}</button>
        </div>
    )
}

export default Button;