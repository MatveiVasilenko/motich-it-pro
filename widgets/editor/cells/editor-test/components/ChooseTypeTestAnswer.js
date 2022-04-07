import React, {
    useState
} from 'react'

const ChooseTypeTestAnswer = ({
    typeAnswer,
    setTypeAnswer,
    classes,
    testItem
}) => {
    const [errorEmpty, setErrorEmpty] = useState(false)
    const types = [
        {
            id: 1,
            value: 'abc',
            title: 'Тест А-Б-В'
        }
    ]
    const [value, setValue] = useState(types[0].value)
    const createQuiz = () => {
        if (testItem?.quiz?.value.length > 4) {
            setTypeAnswer(value)
            setErrorEmpty(false)
        } else {
            setTypeAnswer(false)
            setErrorEmpty(true)
        }
    }
    return (
        <div>
            {errorEmpty && <div className={classes.editor__error}>Необходимо ввести вопрос.</div>}
            {!typeAnswer &&<div>
                <div>Выберите тип ответа</div>
                <select 
                    className={classes.editor__select}
                    value={value} 
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
export default ChooseTypeTestAnswer