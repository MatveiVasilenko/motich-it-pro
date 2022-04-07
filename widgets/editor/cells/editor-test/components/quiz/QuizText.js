import React, {useEffect} from 'react'
import Input from '../../../Input'

const QuizText = ({
    testItem,
    setTestItem,
    classes,
    editQuiz
}) => {
    const changeFunc = (e) => {
        setTestItem({
            ...testItem,
            quiz: {
                type: 'text',
                value: e.target.value
            }
        })
    }
    useEffect(() => {
        if (editQuiz) {
            setTestItem({
                ...testItem,
                quiz: {
                    type: editQuiz.type,
                    value: editQuiz.value
                }
            })
        }
    }, [editQuiz])
    return (
        <div>
            <div>
                <Input 
                    title="Вопрос"
                    changeFunc={changeFunc}
                    classes={classes}
                    placeholder="Введите вопрос"
                    value={testItem.quiz?.value || ''}
                />
            </div>
        </div>
    )
}
export default QuizText