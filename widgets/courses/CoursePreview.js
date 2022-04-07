import React, {
    useContext, useState
} from 'react'
import { NET } from './../../network';
import { lang } from './../../project/data';
import { useRouter } from 'next/router';
import ContextApp from './../../context/App/ContextApp';

const CoursePreview = ({
    classes,
    parent,
    stylesOffice,
    setShowPreview,
    moduleData,
    site,
    defenseLogin = false,
    premiumHave = false,
    defensePremium = false
}) => {
    const [priceCourse, setPriceCourse] = useState(+parent?.premium)
    const [showPromoCode, setShowPromoCode] = useState(false)
    const [promoCode, setPromoCode] = useState('')
    const router = useRouter()
    const {stateApp} = useContext(ContextApp)
    const buyCourses = async () => {
        const json_string = {
            "public_key":"i22684040376",
            "version":"3",
            "action":"pay",
            "amount":`${priceCourse}`,
            "currency":"UAH",
            "description":`Покупка курса ${parent.title}`,
            "result_url": `${NET.FRONT_URL_MAIN}/ru/office/courses`,
            "server_url": `${NET.SERVER_PAY}`,
            'user_id': stateApp.user.id,
            "companies_id": 'premium',
            "course_id": parent.id
        }
        fetch(`${NET.BACK_URL}/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(json_string)
        }).then(async (response) => {
            if (response.status === 200) {
                const result = await response.json()
                const data = result.data
                const signature = result.signature
                
                window.open(`https://www.liqpay.ua/api/3/checkout?data=${data}&signature=${signature}`, '_self')
            }
        })
    }
    return (
        moduleData ? <div className={classes.coursePreview}>
            {parent.img && <div className={classes.coursePreview__img}>
                <img src={`${NET.FRONT_URL}/storage/image${parent?.img.substring(6,40)}`}/>
            </div>}
            <div className={classes.coursePreview__title}>{parent?.title}</div>
            <div className={classes.coursePreview__text} dangerouslySetInnerHTML={{__html: site ? parent?.small_description : parent?.description}}></div>
            {/* <div className={classes.coursePreview__text} dangerouslySetInnerHTML={{__html: parent?.description}}></div> */}
            {moduleData && !site && <div className={classes.coursePreview__btn}>
                <button onClick={() => {
                    if (defenseLogin) {
                        if (premiumHave) {
                            if (defensePremium) {
                                setShowPreview(false)
                                window.scrollTo(0, 0)
                            } else {
                                buyCourses()
                            }
                        } else {
                            setShowPreview(false)
                            window.scrollTo(0, 0)
                        }
                    } else {
                        router.push(`/${lang}/auth/login`)
                    }
                }} className={stylesOffice.btn}>{premiumHave && !defensePremium ? 'Купить курс' : 'Начать обучение'}</button>
                {premiumHave && <div>Стоимость курса: {priceCourse} грн | {Math.floor(+priceCourse / 27)} $</div>}
                {/* {premiumHave && <div onClick={() => {
                    setShowPromoCode(true)
                }}>Ввести промокод</div>} */}
                {showPromoCode && <div>
                        <div>
                            <input className={classes.promo__input} value={promoCode} onChange={(e) => {
                                setPromoCode(e.target.value)
                            }} type="text" />
                        </div>
                        <button
                            className={stylesOffice.btn}
                            onClick={() => {
                                if (promoCode === 'frost999') {
                                    setPriceCourse(999)
                                } else if (promoCode === 'merrymotich') {
                                    setPriceCourse(1199)
                                }
                                setShowPromoCode(false)
                            }}
                        >Активировать</button>
                    </div>}
            </div>}
        </div> : <div className={classes.coursePreview}></div>
    )
}
export default CoursePreview