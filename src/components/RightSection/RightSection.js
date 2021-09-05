import React from 'react';
import AppCard from '../AppCard/AppCard';
import './RightSection.css';

const cardInfo = [
    {
        cardTitle: "Is Triangle?",
        cardLink: ""
    }, {
        cardTitle: "Hypotenuse Calculator",
        cardLink: "hypotenuse-calculator"
    }, {
        cardTitle: "Triangle Area Calculator",
        cardLink: "area-calculator"
    }, {
        cardTitle: "Triangle Quiz",
        link: ""
    }
]

const RightSection = () => {
    return (
        <div className='right-section-wrapper'>
            <div className='right-section-grid-wrapper'>
                {cardInfo.map(info => {
                    const { cardTitle, cardLink } = info;
                    return <AppCard cardTitle={cardTitle} link={cardLink}/>
                })}
            </div> 
        </div>
    )
}

export default RightSection;