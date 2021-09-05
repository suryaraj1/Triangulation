import React from 'react';
import './ValidityAlert.css';

const ValidityAlert = ({ success }) => {
    return (
        <div className='validity-alert-wrapper'>
            {success ? (
                <div className='validity-alert success'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='validity-alert-text'>A triangle can be formed 🎉</p>
                </div>
            ):(
                <div className='validity-alert failure'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='validity-alert-text failure'>Sorry! You cannot form a Triangle 😭</p>
                </div>
            )}
        </div>
    )
}

export default ValidityAlert;