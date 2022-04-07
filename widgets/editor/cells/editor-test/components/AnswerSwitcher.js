import React from 'react'
import QuizText from './quiz/QuizText';
import AnswerABC from './answer/AnswerABC';

const AnswerSwitcher = ({
    classes,
    typeAnswer,
    setTestItem,
    testItem,
    createQuestion,
    editQuizData
}) => {
    const config = {
        classes,
        testItem,
        setTestItem,
        createQuestion,
        answers: editQuizData ? editQuizData.data.answers : false
    }
    switch (typeAnswer) {
        case 'abc':        
        return <AnswerABC {...config}/>

        default:
        return <div></div>    
    }
}
export default AnswerSwitcher