import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hint from '../../components/Hint/Hint';
import QuizCard from '../../components/QuizCard/QuizCard';
import QuizResult from '../../components/QuizResult/QuizResult';
import './TriangleQuiz.css';

const quizQuestions = [
    {
        quizQuestion: "What is a triangle with two side lengths equal called?",
        quizOptions: [
            {
                optionIndex: "A",
                optionText: "Isosceles Triangle",
                isCorrect: true,
            },
            {
                optionIndex: "B",
                optionText: "Equilateral Triangle",
                isCorrect: false,
            },
            {
                optionIndex: "C",
                optionText: "Right Angled Triangle",
                isCorrect: false,
            },
            {
                optionIndex: "D",
                optionText: "Scalene Triangle",
                isCorrect: false,
            },
        ],
    },
    {
        quizQuestion:
            "What is a triangle with any one angle greater than 180° called?",
        quizOptions: [
            {
                optionIndex: "A",
                optionText: "Right Angled Triangle",
                isCorrect: false,
            },
            {
                optionIndex: "B",
                optionText: "Equilateral Triangle",
                isCorrect: false,
            },
            {
                optionIndex: "C",
                optionText: "Obtuse Angled Triangle",
                isCorrect: true,
            },
            {
                optionIndex: "D",
                optionText: "Scalene Triangle",
                isCorrect: false,
            },
        ],
    },
    {
        quizQuestion:
            "Given three sides of a triangle, what can we use to compute the area of triangle?",
        quizOptions: [
            {
                optionIndex: "A",
                optionText: "Hero's Formula",
                isCorrect: false,
            },
            {
                optionIndex: "B",
                optionText: "Heron's Formula",
                isCorrect: true,
            },
            {
                optionIndex: "C",
                optionText: "Queen's Formula",
                isCorrect: false,
            },
            {
                optionIndex: "D",
                optionText: "Triangle Formula",
                isCorrect: false,
            },
        ],
    }, {
        quizQuestion: "Sum of interior angles of a triangle is - ",
        quizOptions: [
            {
                optionIndex: "A",
                optionText: "270°",
                isCorrect: false,
            },
            {
                optionIndex: "B",
                optionText: "180°",
                isCorrect: true,
            },
            {
                optionIndex: "C",
                optionText: "190°",
                isCorrect: false,
            },
            {
                optionIndex: "D",
                optionText: "360°",
                isCorrect: false,
            }
        ]
    }, {
        quizQuestion: "What is a triangle with all three sides equal called?",
        quizOptions: [
            {
                optionIndex: "A",
                optionText: "Equilateral",
                isCorrect: true,
            },
            {
                optionIndex: "B",
                optionText: "Scalene",
                isCorrect: false,
            },
            {
                optionIndex: "C",
                optionText: "Isosceles",
                isCorrect: false,
            },
            {
                optionIndex: "D",
                optionText: "Obtuse",
                isCorrect: false,
            }
        ]
    }
];


class TriangleQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            optionSelected: false,
            totalScore: 0,
            quizEnded: false
        }
    }

    questionNumberIncrementHandler = (response) => {
        const { questionNumber, totalScore } = this.state;
        setTimeout(() => {
            const nextQuestionNumber = questionNumber + 1;
            if (nextQuestionNumber < quizQuestions.length) {
                this.setState({
                    questionNumber: questionNumber + 1,
                    optionSelected: false, // resets for next round
                })
            } else {
                this.setState({
                    quizEnded: true
                })
            }   
        }, 2000);
        this.setState({
            optionSelected: true,
            totalScore: totalScore + (response ? 5 : 0)
        });
    }
    
    render() {
        const { questionNumber, optionSelected, totalScore, quizEnded } = this.state;
        console.log(totalScore);
        return (
            <div className='triangle-quiz-wrapper'>
                <div className='triangle-quiz-left-section'>
                    <BackButton />
                    <div className='triangle-quiz-left-section-main'>
                        <Header mainText="Triangle Quiz" subText="A quiz for triangle enthusiasts"/>
                        <Hint isRuleBoard />
                        <Footer />
                    </div>
                </div>
                <div className='triangle-quiz-right-section'>
                    {!quizEnded ? <QuizCard 
                        questionNumber={questionNumber + 1} 
                        quizQuestion={quizQuestions[questionNumber].quizQuestion} 
                        quizOptions={quizQuestions[questionNumber].quizOptions} 
                        handler={this.questionNumberIncrementHandler}
                        answered={optionSelected}
                    />
                    : <QuizResult quizScore={totalScore} quizQuestionCount={quizQuestions.length}/>}
                </div>
            </div>  
        )
    }
}

export default TriangleQuiz;