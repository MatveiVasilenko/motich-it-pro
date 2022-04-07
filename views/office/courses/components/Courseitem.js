import React, {
    useState, useContext, useEffect
} from 'react'
import { CONFIG } from '../../../../project/config';
import svgSprite from '../../../../project/svg/svgSprite';
import { NET } from './../../../../network';
import ContextApp from './../../../../context/App/ContextApp';
import { useRouter } from 'next/router';
import { lang } from './../../../../project/data';

const CourseItem = ({
    classes,
    stylesOffice,
    el,
    handleCourses
}) => {
    const {stateApp} = useContext(ContextApp)
    const [premium, setPremium] = useState(!el.premium ? true : false)

    const router = useRouter()
    
    useEffect(() => {
        let openCourse = null
        if (stateApp?.user?.premium_id) {
            openCourse = JSON.parse(stateApp.user.premium_id).filter(courseId => courseId === el.id)
            if (openCourse && openCourse.length) {
                setPremium(true)
            }
        }
    }, [])
    
    const buyCourses = async (id) => {
        if (stateApp?.user) {
            const json_string = {
                "public_key":"i22684040376",
                "version":"3",
                "action":"pay",
                "amount":`${+el.premium}`,
                "currency":"UAH",
                "description":`Покупка курса ${el.title}`,
                "result_url": `${NET.FRONT_URL_MAIN}/ru/office/courses`,
                "server_url": `${NET.SERVER_PAY}`,
                'user_id': stateApp.user.id,
                "companies_id": 'premium',
                "course_id": id
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
        } else {
            router.push(`/${lang}/auth/login`)
        }
    }
    console.log(premium)
    return (
        el ? <div className={classes.courseItem}>
            <div className={classes.courseItemLeft}>
                <div
                    onClick={() => handleCourses(el.id)}
                    className={classes.courseItem__image}
                    >
                    {el.img && <div className={classes.courseItem__image__item}>
                        <img src={`${NET.FRONT_URL}/storage/image${el.img.substring(6,40)}`}/>
                    </div>}
                    <div className={classes.courseItem__image__stars}>
                        {svgSprite('Stars', {
                            className: classes.courseItem__svg
                        })}
                    </div>                
                </div>
                <div className={classes.courseItemLeft__tag}>{CONFIG?.hashtag ? CONFIG?.hashtag.join(', ') : '#React'}</div>
            </div>
            <div className={classes.courseItem__body}>
                <div>
                    <div className={classes.courseItem__body__title}>
                        <div>{el.title}</div>
                        <div className={classes.courseItem__body__title__time}>20ч</div>
                        <div className={classes.courseItem__body__title__bg}>
                            {svgSprite('React-Logo', {
                                width: '130px',
                                height: '130px'
                            })}
                        </div>
                        <div className={classes.courseItem__body__title__triangle}>
                            {svgSprite('Triangle', {
                                width: '23px',
                                height: '27px',
                                fill: '#c4c4c4'
                            })}
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: el?.small_description}} className={classes.courseItem__body__text}></div>
                </div>
                <div className={classes.courseItem__body__btn}>
                    {premium ? <button
                        className={stylesOffice.btn}
                        onClick={() => handleCourses(el.id)}
                    >Перейти к просмотру</button> : <div>
                        <button
                        className={stylesOffice.btn}
                        onClick={() => handleCourses(el.id)}
                        >Подробнее</button>
                        <div>стоимость курса: {el.premium} грн / {Math.floor(+el.premium / 27)}$</div>
                    </div>}
                </div>
            </div>
        </div> : <div className={classes.courseItem}></div>
    )
}
export default CourseItem