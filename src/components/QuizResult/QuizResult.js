import React from 'react';
import ResultMessage from '../ResultMessage/ResultMessage';
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
            <ResultMessage quizScore={quizScore}/>
        </div>
    )
}

export default QuizResult;