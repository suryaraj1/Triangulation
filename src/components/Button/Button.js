import React from 'react';
import './Button.css';

const Button = ({ btnTitle, clickHandler, validator }) => {
    console.log(validator);
    return (
        <div className='btn-wrapper'>
            <button className={`${!validator ? "disabled" : "active"}`} onClick={clickHandler} disabled={!validator}>{btnTitle}</button>
        </div>
    )
}

export default Button;