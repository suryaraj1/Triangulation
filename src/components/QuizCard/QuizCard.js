import React from "react";
import QuizOption from "../../components/QuizOption/QuizOption";
import "./QuizCard.css";

class QuizCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
        };
    }

    successHandler = (response) => {
        this.setState(
            {
                success: response,
            },
            () => {
                const { handler } = this.props;
                const { success } = this.state;
                handler(success);
            }
        );
    };

    render() {
        const { questionNumber, quizQuestion, quizOptions, answered } =
            this.props;
        return (
            <div className="quiz-card-wrapper">
                <div className="quiz-card-left-section">
                    <div className="quiz-card-left-section-upper">
                        <p className="quiz-question-number">
                            Question {questionNumber}
                        </p>
                        <div className="quiz-question-wrapper">
                            <p className="quiz-question">{quizQuestion}</p>
                        </div>
                    </div>
                    <div className="quiz-answer-wrapper">
                        {answered && (
                            <div className="quiz-answer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                                <p>Correct Option - A</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="quiz-card-right-section">
                    {quizOptions.map((option) => {
                        const { optionIndex, optionText, isCorrect } = option;
                        return (
                            <QuizOption
                                key={optionIndex}
                                optionIndex={optionIndex}
                                optionText={optionText}
                                isCorrect={isCorrect}
                                handler={this.successHandler}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default QuizCard;
