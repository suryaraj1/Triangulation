import React from 'react';
import './Alert.css';

const Alert = ({ alertMessage, negativeInput }) => {
    console.log(negativeInput);
    return (
        <div className={`alert-wrapper ${negativeInput && "fail"}`}>
            {!negativeInput ? <p className='success'>{alertMessage}</p> : <p className='fail'>Zero or Negative Inputs are not allowed</p>}
        </div>
    );
}

export default Alert;