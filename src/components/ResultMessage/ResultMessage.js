import React from 'react';
import './ResultMessage.css';

const renderResultMessage = quizScore => {
    if (quizScore === 15) {
        return "Awesome! You're a triangle wizard!🎉";
    } else if (quizScore >= 5 && quizScore <= 10) {
        return "Good! Need to try a little hard.🚀";
    } else {
        return "No worries! Try again.😄";
    }
}

const appendStyle = quizScore => {
    if (quizScore === 15) {
        return "success";
    } else if (quizScore >= 5 && quizScore <= 10) {
        return "try-again";
    } else {
        return "fail";
    }
}

const ResultMessage = ({ quizScore }) => {
    return (
        <div className={`result-message-wrapper ${appendStyle(quizScore)}`}>
            <p className='result-message'>{renderResultMessage(quizScore)}</p>
        </div>
    )
}

export default ResultMessage;