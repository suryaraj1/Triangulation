import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './LeftSection.css';

const LeftSection = () => {
    return (
        <div className='left-section-wrapper'>
            <Header mainText="Triangulation" subText="A web app dedicated to triangles."/>
            <Footer />
        </div>
    )
}

export default LeftSection;