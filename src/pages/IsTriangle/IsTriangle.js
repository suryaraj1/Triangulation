import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hint from '../../components/Hint/Hint';
import InputComponent from '../../components/InputComponent/InputComponent';
import ValidityAlert from '../../components/ValidityAlert/ValidityAlert';
import './IsTriangle.css';

class IsTriangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstAngle: "",
            secondAngle: "",
            thirdAngle: "",
            isValidTriangle: false,
            clickCount: 0,
        }
    }

    firstAngleHandler = angle => {
        this.setState({
            firstAngle: angle
        });
    }

    secondAngleHandler = angle => {
        this.setState({
            secondAngle: angle
        });
    }

    thirdAngleHandler = angle => {
        this.setState({
            thirdAngle: angle
        });
    }


    checkTriangleValidity = (firstAngle, secondAngle, thirdAngle) => {
        let angleSummation = parseFloat(firstAngle);
        angleSummation += parseFloat(secondAngle);
        angleSummation += parseFloat(thirdAngle);
        return (angleSummation === 180.00);
    }

    onClickHandler = () => {
        const { firstAngle, secondAngle, thirdAngle, clickCount } = this.state;
        this.setState({
            isValidTriangle: this.checkTriangleValidity(firstAngle, secondAngle, thirdAngle),
            clickCount: clickCount + 1
        })
    }

    isNegativeInput = () => {
        const { firstAngle, secondAngle, thirdAngle } = this.state;
        return (firstAngle <= 0 || secondAngle <= 0 || thirdAngle <= 0);
    }

    validateInput = () => {
        const { firstAngle, secondAngle, thirdAngle } = this.state;
        return (firstAngle !== "" && secondAngle !== "" && thirdAngle !== "");
    }

    render() {
        const { clickCount, isValidTriangle } = this.state;
        return (
            <div className="is-triangle-wrapper">
                <div className='is-triangle-left-section'>
                    <BackButton />
                    <div className='is-triangle-left-section-main'>
                        <Header mainText="Is Triangle?" subText="Give us three angles, we will tell you if you can form a triangle."/>
                        <Hint isRuleBoard={false} hint="The sum of all three interior angles of a triangle is 180??"/>
                        <div className='is-triangle-footer-wrapper'>
                            <Footer />
                        </div>
                    </div>
                </div>
                <div className="is-triangle-right-section">
                    <div className='is-triangle-input-wrapper'>
                        <div className='is-triangle-input-container'>
                            <InputComponent inputLabel="Enter first angle" handler={this.firstAngleHandler}/>
                            <InputComponent inputLabel="Enter second angle" handler={this.secondAngleHandler}/>
                            <InputComponent inputLabel="Enter third angle" handler={this.thirdAngleHandler}/>
                        </div>
                        <div className='is-triangle-btn-wrapper'>
                            <Button btnTitle="Check" clickHandler={this.onClickHandler} validator={this.validateInput() && !this.isNegativeInput()}/>
                        </div>
                    </div>
                    <div className='is-triangle-validity-alert-wrapper'>
                        {clickCount > 0 && <ValidityAlert success={isValidTriangle}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default IsTriangle;