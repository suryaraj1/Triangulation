import React from "react";
import "./QuizOption.css";

class QuizOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctOption: false,
            clickCount: 0,
            appendStyle: "",
        };
    }

    updateStyle = () => {
        const { clickCount, correctOption } = this.state;
        setTimeout(() => {
            this.setState({
                appendStyle: "", // reset for new round
            })
        }, 2000);
        this.setState({
            appendStyle: clickCount > 0 && correctOption ? "success" : "failure"
        })
    }

    clickHandler = () => {
        const { isCorrect } = this.props;
        const { clickCount } = this.state;
        this.setState(
            {
                correctOption: isCorrect,
                clickCount: clickCount + 1,
            },
            () => {
                const { correctOption } = this.state;
                const { handler } = this.props;
                handler(correctOption);
                this.updateStyle();
            }
        );
    };

    render() {
        const { appendStyle } = this.state;
        const { optionIndex, optionText } = this.props;
        return (
            <div
                className={`quiz-option-wrapper ${appendStyle}`}
                onClick={this.clickHandler}
            >
                <p className="quiz-option">
                    {optionIndex}. {optionText}
                </p>
            </div>
        );
    }
}

export default QuizOption;
