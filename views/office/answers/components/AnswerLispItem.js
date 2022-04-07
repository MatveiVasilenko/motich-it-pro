import svgSprite from "../../../../project/svg/svgSprite"

const AnswerLispItem = ({
    elem,
    classes
}) => {
    return (
        <div className={classes.answer}>
            <div className={classes.answer__block}>
                <div className={classes.answer__title}>Ваш ответ</div>
                <div>{elem?.link}</div>
            </div>
            <div className={classes.answer__block}>
                <div className={classes.answer__title}>Ваш комментарий</div>
                <div>{elem?.comment}</div>
            </div>
            {elem?.comment_auth && <div className={classes.answer__block}>
                <div className={classes.answer__title}>Комментарий автора курса</div>
                <div dangerouslySetInnerHTML={{__html: elem.comment_auth}}></div>
            </div>}
            {elem.rating ? <div className={classes.answer__block__rating}>
                <div className={classes.answer__title__rating}>Заработано рейтинга</div>
                <div className={classes.answer__rating}>{elem?.rating}</div>
                {svgSprite('eMionDark')}
            </div> : <div></div>}
        </div>
    )
}
export default AnswerLispItem