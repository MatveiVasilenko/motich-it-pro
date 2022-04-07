import React, {
    useState
} from 'react'

const ChooseTypeTest = ({
    typeQuiz,
    setTypeQuiz,
    classes
}) => {
    const types = [
        {
            id: 1,
            value: 'text',
            title: 'Текстовый вопрос'
        }
    ]
    const [value, setValue] = useState(types[0].value)
    const createQuiz = () => {
        setTypeQuiz(value)
    }
    return (
        <div>
            {!typeQuiz && <div>
                <div>Выберите тип вопроса</div>
                <select
                    value={value} 
                    className={classes.editor__select}
                    onChange={() => {
                        setValue(e.target.value)
                    }}>
                    {types.map((type) => (
                        <option value={type.value}>{type.title}</option>
                    ))}
                </select>
                <div className={classes.editor__button} onClick={createQuiz}>Выбрать</div>
            </div>}
        </div>
    )
}
export default ChooseTypeTest