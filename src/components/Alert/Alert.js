import React from 'react';
import './Alert.css';

const Alert = ({ alertMessage }) => {
    return (
        <div className='alert-wrapper'>
            <p className='alert'>{alertMessage}</p>
        </div>
    );
}

export default Alert;