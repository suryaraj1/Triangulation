import React from 'react';
import './Button.css';

const Button = ({ btnTitle, clickHandler, validator }) => {
    return (
        <div className='btn-wrapper'>
            <button className={`${!validator ? "disabled" : "active"}`} onClick={clickHandler} disabled={!validator}>{btnTitle}</button>
        </div>
    )
}

export default Button;