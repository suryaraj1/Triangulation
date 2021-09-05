import React from 'react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hint from '../../components/Hint/Hint';
import InputComponent from '../../components/InputComponent/InputComponent';
import './IsTriangle.css';

class IsTriangle extends React.Component {
    render() {
        return (
            <div className="is-triangle-wrapper">
                <div className='is-triangle-left-section'>
                    <Header mainText="Is Triangle?" subText="Give us three angles, we will tell you if you can form a triangle."/>
                    <Hint hint="The sum of all three interior angles of a triangle is 180°"/>
                    <div className='is-triangle-footer-wrapper'>
                        <Footer />
                    </div>
                </div>
                <div className="is-triangle-right-section">
                    <div className='is-triangle-input-wrapper'>
                        <div className='is-triangle-input-container'>
                            <InputComponent inputLabel="Enter first angle"/>
                            <InputComponent inputLabel="Enter second angle" />
                            <InputComponent inputLabel="Enter third angle" />
                        </div>
                        <div className='is-triangle-btn-wrapper'>
                            <Button btnTitle="Check" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IsTriangle;