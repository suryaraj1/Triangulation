import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    onChangeHandler = event => {
        this.setState({
            inputValue: event.target.value
        }, () => {
            const { handler } = this.props;
            const { inputValue } = this.state;
            handler(inputValue);
        })
    }

    render() {
        const { inputLabel } = this.props;
        return (
            <div className='input-wrapper'>
                <div className='input-label-wrapper'>
                    <p className='input-label'>{inputLabel}</p>
                </div>
                <div className='input-box-wrapper'>
                    <input onChange={this.onChangeHandler} type="number" min="0" placeholder="0"/>
                </div>
            </div>
        )
    }
}

export default InputComponent;