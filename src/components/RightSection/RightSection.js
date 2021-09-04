import React from 'react';
import AppCard from '../AppCard/AppCard';
import './RightSection.css';

const RightSection = () => {
    return (
        <div className='right-section-wrapper'>
            <div className='right-section-grid-wrapper'>
                <AppCard cardTitle="Is Triangle?"/>
                <AppCard cardTitle="Hypotenuse Calculator" />
                <AppCard cardTitle="Triangle Area Calculator" />
                <AppCard cardTitle="Triangle Quiz" />
            </div> 
        </div>
    )
}

export default RightSection;