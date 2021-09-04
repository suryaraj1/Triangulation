import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './LeftSection.css';

const LeftSection = () => {
    return (
        <div className='left-section-wrapper'>
            <Header />
            <Footer />
        </div>
    )
}

export default LeftSection;