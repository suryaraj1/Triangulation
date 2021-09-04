import React from 'react';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hint from '../components/Hint/Hint';
import InputComponent from '../components/InputComponent/InputComponent';
import './HypotCalculator.css';

class HypotCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            base: "",
            hypotenuse: 0.00,
        }
    }

    heightHandler = heightData => {
        this.setState({
            height: heightData
        })
    }

    baseHandler = baseData => {
        this.setState({
            base: baseData
        })
    }

    calculateHypotenuse = (height, base) => {
        const hypotenuse = Math.sqrt(Math.pow(height, 2) + Math.pow(base, 2));
        return parseFloat(hypotenuse).toFixed(2);
    }

    onClickHandler = () => {
        const { height, base } = this.state;
        console.log(height, base);
        this.setState({
            hypotenuse: this.calculateHypotenuse(height, base)
        });
    }

    render() {
        return (
            <div className='hypot-calc-wrapper'>
                <div className='hypot-calc-left-section'>
                    <Header mainText="Hypotenuse Calculator" subText="Give us the length of height and base of a right angled triangle and we would give the length of hypotenuse."/>
                    <Hint hint="We are using the Pythagorean Theorem to find the hypotenuse"/>
                    <div className='hypot-calc-footer-wrapper'>
                        <Footer />
                    </div>
                </div>
                <div className='hypot-calc-right-section'>
                    <div className='hypot-calc-input-wrapper'>
                        <InputComponent inputLabel="Enter the height value" handler={this.heightHandler}/>
                        <InputComponent inputLabel="Enter the base value" handler={this.baseHandler}/>
                        <Button btnTitle="Calculate" clickHandler={this.onClickHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HypotCalculator;