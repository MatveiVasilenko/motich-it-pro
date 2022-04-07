import React, {
    useState, useEffect
} from 'react'
import ChooseTypeTest from './components/ChooseTypeTest'
import QuizSwitcher from './components/QuizSwitcher'
import ChooseTypeTestAnswer from './components/ChooseTypeTestAnswer';
import AnswerSwitcher from './components/AnswerSwitcher';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditorTest = ({
    title,
    classes,
    dataItem,
    setDataItem,
    attribute
}) => {
    
    const [testData, setTestData] = useState([])
    const [testItem, setTestItem] = useState({
        quiz: {
            value: ''
        }
    })
    useEffect(() => {
        if (dataItem[attribute]) {
            setTestData(JSON.parse(dataItem[attribute]))
        }
    }, [])
    const [showChooseTypeTest, setShowChooseTypeTest] = useState(false)
    const [typeQuiz, setTypeQuiz] = useState(false)
    const [typeAnswer, setTypeAnswer] = useState(false)
    const [editQuizData, setEditQuizData] = useState(false)
    const createQuestion = (answers, typeAnswer, answersEdit) => {
        if (answersEdit) {
            // Edit question
            console.log(testData)
            setTestData(() => {
                return testData.map((el, count) => {
                    if (count === editQuizData.id) {
                        return {
                            ...testItem,
                            answers: {
                                value: answers,
                                type: typeAnswer
                            }
                        }
                    } else {
                        return el
                    }
                })
            })
            setDataItem({
                ...dataItem,
                [attribute]: JSON.stringify(JSON.parse(dataItem[attribute]).map((el, count) => {
                    if (count === editQuizData.id) {
                        return {
                            ...testItem,
                            answers: {
                                value: answers,
                                type: typeAnswer
                            }
                        }
                    } else {
                        return el
                    }
                }))
            })
            setEditQuizData(false)
        } else {
            // Create question
            setTestData([...testData, {
                ...testItem,
                answers: {
                    value: answers,
                    type: typeAnswer
                }
            }])
            setDataItem({
                ...dataItem,
                [attribute]: JSON.stringify([...testData, {
                    ...testItem,
                    answers: {
                        value: answers,
                        type: typeAnswer
                    }
                }])
            })
        }
        setTestItem({
            quiz: {
                value: ''
            }
        })
    }
    const editQuiz = (idx) => {
        const quiz = testData.filter((el, count) => count === idx)[0]
        setEditQuizData({
            id: idx,
            data: quiz
        })
        console.log(quiz)
        setTypeQuiz(quiz.quiz.type)
        setTypeAnswer(quiz.answers.type)
    }
    const deleteQuiz = (idx) => {
        setTestData(() => {
            return testData.filter((el, count) => count !== idx)
        }) 
        setDataItem({
            ...dataItem,
            [attribute]: JSON.stringify(JSON.parse(dataItem[attribute]).filter((el, count) => count !== idx))
        })
    }
    return (
        <div>
            <div className={classes.editor__item__title}>{title}</div>
            {testData.map((test, idx) => (
                <div className={classes.test__item}>
                    <div className={classes.test__item__value}>
                        <div>{idx + 1}. </div>
                        <div>{test.quiz.value}</div>
                    </div>
                    <div className={classes.test__item__btns}>
                        <div
                            className={classes.test__item__btns__icon}
                            onClick={() => editQuiz(idx)}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div
                            className={classes.test__item__btns__icon}
                            onClick={() => deleteQuiz(idx)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                </div>
            ))}
            <div>
                {!showChooseTypeTest && <div className={classes.editor__button} onClick={() => {
                    setShowChooseTypeTest(true)
                }}>Создать вопрос</div>}
                {showChooseTypeTest && <div>
                        <ChooseTypeTest 
                            typeQuiz={typeQuiz}
                            setTypeQuiz={setTypeQuiz}
                            classes={classes}
                        />
                    </div>}
                {typeQuiz && <div>
                    <QuizSwitcher 
                        classes={classes}
                        typeQuiz={typeQuiz}
                        testItem={testItem}
                        setTestItem={setTestItem}
                        editQuizData={editQuizData}
                    />
                </div>}
                {typeQuiz && <div>
                        <ChooseTypeTestAnswer 
                            typeAnswer={typeAnswer}
                            setTypeAnswer={setTypeAnswer}
                            classes={classes}
                            testItem={testItem}
                        />
                    </div>}
                {typeAnswer && <AnswerSwitcher 
                        classes={classes}
                        typeAnswer={typeAnswer}
                        testItem={testItem}
                        setTestItem={setTestItem}
                        createQuestion={createQuestion}
                        editQuizData={editQuizData}
                    />}
            </div>
        </div>
    )
}
export default EditorTest