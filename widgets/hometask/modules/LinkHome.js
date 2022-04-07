const LinkHome = ({
    title,
    description,
    answerData,
    setAnswerData,
    classes,
    stylesOffice
}) => {
    const changeHandler = (e) => {
        setAnswerData({
            ...answerData,
            link: e.target.value
        })
    }
    return (
        <div>
            <div className={classes.title_item}>Название: {title}</div>
            <div>Описание задания</div>
            <div dangerouslySetInnerHTML={{__html: description}}></div>
            <div>
                <div className={classes.linkText}>Загрузить ссылку на домашнее задание</div>
                <div>
                    <div className={stylesOffice.input}>
                        <input onChange={changeHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LinkHome