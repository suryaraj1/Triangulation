import React from 'react';
import Alert from '../../components/Alert/Alert';
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
            clickCount: 0
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
        const { height, base, clickCount } = this.state;
        // add input validation logic here
        this.setState({
            area: this.calculateTriangleArea(height, base),
            clickCount: clickCount + 1
        });
    }

    render() {
        const { area, clickCount } = this.state;
        return (
            <div className='area-calc-wrapper'>
                <div className='area-calc-left-section'>
                    <Header mainText="Triangle Area Calculator" subText=""/>
                    <Hint hint="Say b = base and h = height of triangle, then area = 0.5 * b * h"/>
                    <div className='area-calc-footer-wrapper'>
                        <Footer />
                    </div>
                </div>
                <div className='area-calc-right-section'>
                    <div className='area-calc-input-wrapper'>
                        <InputComponent inputLabel="Enter the height value" handler={this.heightHandler}/>
                        <InputComponent inputLabel="Enter the base value" handler={this.baseHandler}/>
                        <Button btnTitle="Calculate" clickHandler={this.onClickHandler}/>
                    </div>
                    {clickCount > 0 && <Alert alertMessage={`🎉 The area is ${area}`}/>}
                </div>
            </div>
        )
    }
}

export default AreaCalculator;