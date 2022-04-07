import React from 'react'
import QuizText from './quiz/QuizText';

const QuizSwitcher = ({
    classes,
    typeQuiz,
    setTestItem,
    testItem,
    editQuizData
}) => {
    const config = {
        classes,
        testItem,
        setTestItem,
        editQuiz: editQuizData ? editQuizData.data.quiz : false
    }
    switch (typeQuiz) {
        case 'text':        
        return <QuizText {...config}/>

        default:
        return <div></div>    
    }
}
export default QuizSwitcher