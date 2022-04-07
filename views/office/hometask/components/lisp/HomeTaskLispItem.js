import { useRouter } from 'next/router';
import { lang } from '../../../../../project/data';
import svgSprite from '../../../../../project/svg/svgSprite';
const HomeTaskLispItem = ({
    elem,
    classes,
    statsData,
    setWarningAuth,
    user
}) => {
    const router = useRouter()
    const goToSubcourse = () => {
        if (user) {
            router.push(`/${lang}/office/answers/${elem.id}`)
        } else {
            setWarningAuth(true)
        }
    }
    return (
        <div onClick={goToSubcourse} className={classes.lisp__statsItem}>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }} className={classes.lisp__item}>
                {<div className={classes.lisp__stats}>
                    {statsData.answerCountCheck ? <div className={[classes.lisp__stats__item, classes.lisp__stats__item_ready].join(' ')}>{statsData.answerCountCheck}</div> : <div></div>}
                    {statsData.answerCountReady ? <div className={[classes.lisp__stats__item, classes.lisp__stats__item_check].join(' ')}>{statsData.answerCountReady}</div> : <div></div>}
                </div>}
                <div>
                    <div className={classes.lisp__item__title}>{elem.title_module}</div>
                    <div>{elem.title}</div>
                </div>
                <div className={classes.lisp__rating}>
                    <div>{elem.rating}</div>
                    {svgSprite('eMionDark')}
                </div>
            </div>
        </div>
    )
}
export default HomeTaskLispItem