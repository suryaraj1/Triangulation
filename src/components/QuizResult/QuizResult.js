import React from 'react';
import './QuizResult.css';

const QuizResult = ({ quizScore, quizQuestionCount }) => {
    return (
        <div className='quiz-result-wrapper'>
            <div className='quiz-result-header-wrapper'>
                <p className='quiz-result-header'>Score</p>
            </div>
            <div className='quiz-result-score-wrapper'>
                <p className='quiz-result-score'>{quizScore} / {5 * quizQuestionCount}</p>
            </div>
        </div>
    )
}

export default QuizResult;