import React from 'react';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import InputComponent from '../components/InputComponent/InputComponent';
import './HypotCalculator.css';

class HypotCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='hypot-calc-wrapper'>
                <div className='hypot-calc-left-section'>
                    <Header mainText="Hypotenuse Calculator" subText="Give us the length of height and base of a right angled triangle and we would give the length of hypotenuse."/>
                    <div className='hypot-calc-footer-wrapper'>
                        <Footer />
                    </div>
                </div>
                <div className='hypot-calc-right-section'>
                    <div className='hypot-calc-input-wrapper'>
                        <InputComponent inputLabel="Enter the height value" />
                        <InputComponent inputLabel="Enter the base value" />
                        <Button btnTitle="Calculate"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HypotCalculator;