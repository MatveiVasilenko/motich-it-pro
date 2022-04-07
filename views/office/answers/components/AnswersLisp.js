import AnswerLispItem from "./AnswerLispItem"

const AnswersLisp = ({
    classes,
    answersData
}) => {
    console.log(answersData)
    return (
        <div>
            <div className={classes.answers__body}>
                <div className={classes.answers__body__item}>
                    <div className={[classes.answers__body__item__title, classes.answers__body__item__title_check].join(' ')}>На проверке</div>
                    {answersData.filter(el => el.status === 'check').map((elem, idx) => (
                        <AnswerLispItem 
                            key={`answer${idx}`}
                            classes={classes}
                            elem={elem}
                        />
                    ))}
                </div>
                <div className={classes.answers__body__item}>
                    <div className={[classes.answers__body__item__title, classes.answers__body__item__title_ready].join(' ')}>Проверенные</div>
                    {answersData.filter(el => el.status === 'ready').map((elem, idx) => (
                        <AnswerLispItem 
                            key={`answer${idx}`}
                            classes={classes}
                            elem={elem}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AnswersLisp