import React, {
    useState
} from 'react'
import svgSprite from './../../project/svg/svgSprite';
import { lang } from './../../project/data';

const LispItemModule = ({
    classes,
    id,
    module,
    payment,
    getModule,
    router,
    setShowPreview,
    site,
    defenseLogin,
    premiumHave,
    defensePremium
}) => {
    const [showPay, setShowPay] = useState(false)

    const chooseModule = (module) => {
        if ((defenseLogin && !premiumHave) || (!premiumHave && defensePremium) || (premiumHave && defensePremium)) {
            setShowPreview(false)
        }
        if (((+module?.open || payment === 1) && !site && defenseLogin && !premiumHave) || (!premiumHave && defensePremium) || (premiumHave && defensePremium)) {
            window.scrollTo(0, 0)
            getModule(module)
        } else {
            setShowPay(!showPay)
        }
    }
    const goToPay = () => {
        router.push('/ru/office')
    }
    const goToForm = () => {
        router.push('/ru#start')
    }
    const goToAuth = () => {
        router.push(`/${lang}/auth/login`)
    }
    return (
        <div 
            className={classes.coursesItem__module}
            key={`module${id}`}
            onClick={() => chooseModule(module)}
            >
            <div>
                {svgSprite('Triangle', {
                    width: '15px',
                    fill: '#c4c4c4'
                })}
            </div>
            <div
                className={((+module?.open || payment === 1) && !site && defenseLogin && !premiumHave) || (!premiumHave && defensePremium) || (premiumHave && defensePremium) ? classes.coursesItem__module__title : [classes.coursesItem__module__title, classes.coursesItem__module__title_disabled].join(' ')}
            >
                <div className={classes.coursesItem__module__title__item}>{module.title}</div>
                {((+module?.open || payment === 1) && !site && defenseLogin && !premiumHave) || (!premiumHave && defensePremium) || (premiumHave && defensePremium) ? <></> : <div>
                    {svgSprite('AuthPassword', {
                        width: '15px',
                        fill: '#00557E'
                    })}
                </div>}
                {showPay ? !site ? defenseLogin ? (premiumHave && !defensePremium) ? <div onClick={goToPay} className={classes.coursesItem__module__title__info}>
                    Для просмотра курса приобретите его <span className={classes.coursesItem__module__title__info__home}>“Нажав на кнопку Купить курс после описания курса”</span>
                </div> : <div onClick={goToPay} className={classes.coursesItem__module__title__info}>
                    Для дальнейшего просмотра видеоурока выберите и оплатите подписку на <span className={classes.coursesItem__module__title__info__home}>“Главной”</span>
                </div> : <div onClick={goToAuth} className={classes.coursesItem__module__title__info}>
                    Для начала просмотра курса бесплатно авторизируйтесь на платформе <span className={classes.coursesItem__module__title__info__home}>“Войти”</span>
                </div> : <div onClick={goToForm} className={classes.coursesItem__module__title__info}>
                    Для просмотра видеоуроков переходите на <span className={classes.coursesItem__module__title__info__home}>платформу</span>
                </div> : <></>}
                {showPay && <div onClick={() => setShowPay(false)} className={classes.coursesItem__background}></div>}
            </div>
        </div>
    )
}
export default LispItemModule