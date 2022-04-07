import React, {
    useState, useEffect
} from 'react'
import { transformNumberOnLetter } from '../../../../../../common/utils';
import Input from './../../../Input';
import { faCheck, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AnswerABC = ({
    classes,
    createQuestion,
    testItem,
    answers
}) => {
    const [answerData, setAnswerData] = useState([])
    const [newAnswer, setNewAnswer] = useState(true)
    const [valueAnswer, setValueAnswer] = useState({
        value: '',
        check: false
    })
    const [errorEmpty, setErrorEmpty] = useState(false)
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        if (answers) {
            setAnswerData(answers.value)
        }
    }, [answers])
    const changeFunc = (e) => {
        setValueAnswer({
            ...valueAnswer,
            value: e.target.value,
        })
    }
    const addAnswer = () => {
        if (valueAnswer) {
            setAnswerData([...answerData, valueAnswer])
            setValueAnswer({
                value: '',
                check: false
            })   
            setErrorEmpty(false)    
        } else {
            setErrorEmpty('Необходимо ввести ответ')
        }
    }
    const checkRightAnswer = (idx) => {
        const newAnswerData = answerData.map((answer, count) => {
            if (count === idx) {
                return {
                    ...answer,
                    check: true
                }
            } else {
                return {
                    ...answer,
                    check: false
                }
            }
        })
        setAnswerData(newAnswerData)
    }
    const editAnswer = (idx) => {
        setEdit({
            id: idx
        })
        const editValue = answerData.filter((el, count) => count === idx)[0]
        console.log(editValue.check)
        setValueAnswer({
            value: editValue.value,
            check: editValue.check
        })
    }
    const saveEditAnswer = () => {
        const newAnswerData = answerData.map((answer, count) => {
            if (count === edit.id) {
                console.log(valueAnswer)

                return {
                    value: valueAnswer.value,
                    check: valueAnswer.check
                }
            } else {
                return answer
            }
        })
        console.log(newAnswerData)
        setAnswerData(newAnswerData)
        setEdit(false)
        setValueAnswer({
            value: '',
            check: false
        })
    }
    const deleteAnswer = (idx) => {
        const newAnswerData = answerData.filter((el, id) => id !== idx)
        setAnswerData(newAnswerData)
    }
    return (
        <div>
            <div className={classes.answer__title}>Варианты ответов</div>
            {answerData.map((answer, idx) => (
                <div className={classes.answer__item}>
                    <div className={classes.answer__item__value}>
                        <div>{transformNumberOnLetter(idx)}. </div>
                        <div style={{
                            background: answer.check ? 'green' : 'initial'
                        }}>{answer.value}</div>
                    </div>
                    <div className={classes.answer__item__btns}>
                        <div 
                            className={classes.answer__item__btns__icon}
                            onClick={() => checkRightAnswer(idx)}
                            >
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div
                            className={classes.answer__item__btns__icon}
                            onClick={() => editAnswer(idx)}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div
                            className={classes.answer__item__btns__icon}
                            onClick={() => deleteAnswer(idx)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                </div>
            ))}
            {newAnswer && <div>
                <Input 
                    title="Вариант ответа"
                    changeFunc={changeFunc}
                    classes={classes}
                    placeholder="Введите ответ"
                    value={valueAnswer.value || ''}
                />
                {errorEmpty && <div className={classes.editor__error}>{errorEmpty}</div>}
                <div>
                    <div className={classes.editor__button} onClick={edit ? saveEditAnswer : addAnswer}>{edit ? 'Редактировать вариант' : 'Сохранить вариант'}</div>
                </div>
            </div>}
            {answerData.length ? <div>
                    <div
                            className={classes.editor__button} 
                            onClick={() => {
                            if (testItem.quiz.value) {
                                createQuestion(answerData, 'abc', answers)
                                setAnswerData([])
                                setValueAnswer({
                                    value: '',
                                    check: false
                                })
                            }
                        }}>{answers ? 'Редактировать вопрос' : 'Создать вопрос'}</div>
                </div> : <div></div>}
        </div>
    )
}
export default AnswerABC