import React from 'react';
import Alert from '../../components/Alert/Alert';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hint from '../../components/Hint/Hint';
import InputComponent from '../../components/InputComponent/InputComponent';
import './AreaCalculator.css';

class AreaCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            base: "",
            area: 0.0,
            clickCount: 0,
            isNegative: false
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

    calculateTriangleArea = (height, base) => {
        const area = (0.5 * height * base);
        return parseFloat(area).toFixed(2);
    }

    onClickHandler = () => {
        const { height, base, clickCount, isNegative } = this.state;
        if (this.isNegativeInput()) {
            this.setState({
                isNegative: true,
                clickCount: clickCount + 1
            })
        } else {
            this.setState({
                area: this.calculateTriangleArea(height, base),
                clickCount: clickCount + 1,
                isNegative: false
            });
        }
    }

    isNegativeInput = () => {
        const { height, base } = this.state;
        return (height <= 0 || base <= 0);
    }

    validateInput = () => {
        const { height, base } = this.state;
        return (height !== "" && base !== "")
    }

    render() {
        const { area, clickCount, isNegative } = this.state;
        return (
            <div className='area-calc-wrapper'>
                <div className='area-calc-left-section'>
                    <BackButton />
                    <div className='area-calc-left-section-main'>
                        <Header mainText="Triangle Area Calculator" subText="Give the height and base of the triangle and leave the rest on us."/>
                        <Hint isRuleBoard={false} hint="Say b = base and h = height of triangle, then area = 0.5 * b * h"/>
                        <div className='area-calc-footer-wrapper'>
                            <Footer />
                        </div>
                    </div>
                </div>
                <div className='area-calc-right-section'>
                    <div className='area-calc-input-wrapper'>
                        <InputComponent inputLabel="Enter the height value" handler={this.heightHandler}/>
                        <InputComponent inputLabel="Enter the base value" handler={this.baseHandler}/>
                        <Button btnTitle="Calculate" clickHandler={this.onClickHandler} validator={this.validateInput()}/>
                    </div>
                    {clickCount > 0 && <Alert alertMessage={`🎉 The area is ${area}`} negativeInput={isNegative}/>}
                </div>
            </div>
        )
    }
}

export default AreaCalculator;