import React from 'react';
import './Header.css';

const Header = ({mainText, subText}) => {
    return (
        <div className='header-wrapper'>
            <p className='header-main'>{mainText}</p>
            <p className='header-sub'>{subText}</p>
        </div>
    )
}

export default Header;