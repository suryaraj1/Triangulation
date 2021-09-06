import React from "react";
import "./Hint.css";

class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
    }

    onClickHandler = () => {
        const { isClicked } = this.state;
        this.setState({
            isClicked: !isClicked,
        });
    };

    render() {
        const { hint, isRuleBoard } = this.props;
        const { isClicked } = this.state;
        return (
            <div className="hint-wrapper">
                <div className="hint-top-wrapper" onClick={this.onClickHandler}>
                    <p className="hint-top-text">
                        {!isRuleBoard ? "🤔 Click to know how we are finding this" : "📏 Click to know rules for the Triangle Quiz"}
                    </p>
                </div>
                {isClicked && (
                    <div className="hint-bottom-wrapper">
                        {!isRuleBoard ? (
                            <>
                                <div className="hint-img-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                </div>
                                <p className="hint-bottom-text">{hint}</p>
                            </>
                        ) : (
                            <div className='hint-bottom-rules'>
                                {/* for the quiz rule card */} 
                                <p>• Quiz has 5 questions on triangles</p>
                                <p>• Every question has 5 pts. for correct answer ✅</p>
                                <p>• 0 pts. for every wrong answer ❌</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Hint;
