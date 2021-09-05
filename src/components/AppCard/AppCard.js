import React from 'react';
import { Link } from 'react-router-dom';
import './AppCard.css';

const AppCard = ({ cardTitle, link }) => {
    return (
        <Link to={{ pathname: link }} style={{ textDecoration: 'none' }}>
            <div className='app-card-wrapper'>
                <div className='app-card-header-wrapper'>
                    <p className='app-card-header'>{cardTitle}</p>
                </div>
                <div className='app-card-arrow-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default AppCard;