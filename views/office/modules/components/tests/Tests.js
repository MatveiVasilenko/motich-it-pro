import { useState, useEffect, useContext } from 'react';
import classes from './../../../../../styles/views/module-view-styles.module.scss'
import stylesOffice from './../../../../../styles/layouts/office-layouts-styles.module.scss'
import { getData, transformNumberOnLetter } from '../../../../../common/utils';
import { emion } from './../../../../../project/data';
import svgSprite from './../../../../../project/svg/svgSprite';
import { NET } from './../../../../../network';
import ContextApp from '../../../../../context/App/ContextApp';
import { changeEmion } from './../../../../../context/App/actions';

const Tests = ({
    title,
    options,
    id
}) => {
    const {stateApp, dispatchApp} = useContext(ContextApp)
    let rightAnswer = 0
    const [optionsData, setOptionsData] = useState(JSON.parse(options) || [])
    const [activeIdx, setActiveIdx] = useState(0)
    const [answersUser, setAnswersUser] = useState([0])
    const handlerAnswer = (idQuiz, idxAns) => {
        const newAnswerUser = [...answersUser]
        newAnswerUser[idQuiz] = idxAns
        setAnswersUser(newAnswerUser)
    }
    const [resultQuiz, setResultQuiz] = useState(false)
    const [textResult, setTextResult] = useState('')
    const checkTest = async () => {
        console.log(rightAnswer)
        const resultTest = optionsData.map((option, idQuiz) => {
            const resultAnswersUser = option.answers.value.map((answer, idAnswer) => {

                return {
                    value: answer.value,
                    check: answer.check,
                    user: idAnswer === answersUser[idQuiz] ? true : false
                }
            })

            return {
                quiz: option.quiz.value,
                answers: resultAnswersUser
            }
        })
        setResultQuiz(resultTest)
        let rightAnswerNew = 0
        resultTest.map((res, idx) => {
            res.answers.map((answer) => {
                if (answer.user && answer.check) {
                    rightAnswerNew++
                }
            })
        })
        const data = await getData(
            `${NET.BACK_URL}/modules/visited/${id}`,
            "POST",
            {
                idUser: stateApp.user.id,
                result: emion.tests * +rightAnswerNew  / resultTest.length
            }
        )
        if (data.data.emion !== 'repeat'){
            dispatchApp(changeEmion(data.data.emion))
            setTextResult('Хороший результат! Переходите к следующему уроку!')
        } else {
            setTextResult('Хороший результат! Но похоже Вы уже проходили этот тест;) А баллы для рейтинга фиксируются именно с 1 попытки. До встречи в следующих тестах!')
        }

    }
    const nextQuiz = () => {
        const newAnswerUser = [...answersUser]
        newAnswerUser[activeIdx + 1] = 0
        setAnswersUser(newAnswerUser)
        setActiveIdx(activeIdx + 1)
    }
    return (
        <div>
            <div className={classes.desc__title}>Тестовое задание</div>
            <div className={classes.desc__subtitle}>Получить e-Mions Вы можете только с первой попытки прохождение задания - однако это не ограничивает Вас в повторном прохождении;)</div>
            <div className={classes.tests__title}>{title}</div>

            {!resultQuiz ? <div>
                <div className={classes.tests__item}>
                    {optionsData[activeIdx].quiz.type === 'text' ? <div className={classes.tests__quiz}>{optionsData[activeIdx].quiz.value}</div> : <div></div>}
                    {optionsData[activeIdx].answers.type === 'abc' ? <div>
                        {optionsData[activeIdx].answers.value.map((answer, idAnswer) => (
                            <div className={classes.tests__answer} onClick={() => handlerAnswer(activeIdx, idAnswer)}>
                                <input checked={answersUser[activeIdx] === idAnswer} className={classes.tests__answer__radio} id={optionsData[activeIdx].quiz.value + String(idAnswer)} type="radio" name={optionsData[activeIdx].quiz.value} />
                                <label className={classes.tests__answer__label} for={optionsData[activeIdx].quiz.value + String(idAnswer)}>{answer.value}</label>
                            </div>
                        ))}
                    </div> : <div></div>}
                </div>
                <div className={classes.tests__footer}>
                    <div>
                        Вопрос {activeIdx + 1} / {optionsData.length}
                    </div>
                    <div>
                        <button 
                            disabled={activeIdx + 1 === optionsData.length && !answersUser.length ? true : false}
                            onClick={activeIdx + 1 === optionsData.length ? checkTest : nextQuiz}
                            style={{
                                width: 'fit-content'
                            }} 
                            className={stylesOffice.btn}>{activeIdx + 1 === optionsData.length ? 'Проверить тест' : 'Следующий вопрос'}</button>
                    </div>
                </div>
            </div> : <div>
                    {resultQuiz && <div>
                            <div className={classes.result__title}>Ваши результаты:</div>
                            {resultQuiz && resultQuiz.map((item, idx) => (
                                <div key={`result${idx}`}>
                                    <div className={classes.result__quiz}>{idx + 1}. {item.quiz}</div>
                                    <div className={classes.result__body}>{item.answers.map((answer, idx) => {
                                        if (answer.check || (answer.check && answer.user)) {
                                            if (answer.check && answer.user) {
                                                rightAnswer++
                                            }
                                            return <div key={`right${idx}`} className={[classes.result__answer, classes.result__answer_true].join(' ')}>{transformNumberOnLetter(idx)}. {answer.value}</div>
                                        } else if (answer.user && !answer.check) {
                                            return <div key={`unright${idx}`} className={[classes.result__answer, classes.result__answer_false].join(' ')}>{transformNumberOnLetter(idx)}. {answer.value}</div>
                                        } else {
                                            return <div key={`gen${idx}`} className={classes.result__answer}>{transformNumberOnLetter(idx)}. {answer.value}</div>
                                        }
                                    })}</div>
                                </div>
                            ))}
                            <div className={classes.result__footer}>
                                <div className={classes.result__footer__right}>Правильных ответов {rightAnswer} из {resultQuiz.length}</div>
                                <div className={classes.result__footer__money}>
                                    <div className={classes.result__footer__money__text}>Вы заработали: </div>
                                    <div className={classes.result__footer__money__number}>{Math.floor(emion.tests * +rightAnswer  / resultQuiz.length)}</div>
                                    <div className={classes.result__footer__money__svg}>
                                        {svgSprite('eMion')}
                                    </div>
                                    {/* <div>e-Mion</div> */}
                                </div>
                            </div>
                            {textResult && <div className={classes.result__footer__end}>{textResult}</div>}
                        </div>}
                </div>}
        </div>
    )
}
export default Tests