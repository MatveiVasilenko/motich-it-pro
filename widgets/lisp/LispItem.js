import React, {
    useState, useContext, useCallback
} from 'react'
import svgSprite from '../../project/svg/svgSprite'
import LispItemModule from './LispItemModule';
import { useRouter } from 'next/router';

const LispItem = ({
    classes,
    item,
    idx,
    payment,
    getModule,
    setShowPreview,
    router,
    site,
    defenseLogin,
    defensePremium,
    premiumHave
}) => {   
    const [showSub, setShowSub] = useState(false)
    const [showPay, setShowPay] = useState(false)

    const handleShow = () => {
        if (+item?.course?.open || payment === 1) {
            setShowSub(!showSub)
        } else {
            setShowPay(!showPay)
        }
        
    }
    // const goToPay = () => {
    //     router.push('/ru/office')
    // }
    const goToPay = useCallback(() => {
        router.push('/ru/office')
    }, [showPay, setShowPay, showSub, setShowSub])
    const goToForm = () => {
        router.push('/ru#start')

    }
    return (
        <div 
            
            key={`course${idx}`}>
            <div
                onClick={handleShow}
                className={+item?.course?.open || payment === 1 ? classes.coursesItem : [classes.coursesItem, classes.coursesItem_disabled].join(' ')}
            >
                <div 
                    className={!showSub ? classes.coursesItem__triangle : [classes.coursesItem__triangle, classes.coursesItem__triangle_active].join(' ')}
                >
                    {svgSprite('Triangle', {
                        width: '15px',
                        fill: '#c4c4c4'
                    })}
                </div>
                <div className={classes.coursesItem__title}>{item?.course?.title}</div>
                {+item?.course?.open || payment === 1 ? <></> :<div>
                    {svgSprite('AuthPassword', {
                        width: '15px',
                        fill: '#00557E'
                    })}
                </div>}
                {showPay ? !site ? <div onClick={goToPay} className={classes.coursesItem__module__title__info}>
                    Для дальнейшего просмотра видеоурока выберите и оплатите подписку на <span className={classes.coursesItem__module__title__info__home}>“Главной”</span>
                </div> : <div onClick={goToForm} className={classes.coursesItem__module__title__info}>
                    Для просмотра видеоуроков переходите на <span className={classes.coursesItem__module__title__info__home}>платформу</span>
                </div> : <></>}
            </div>
            {showSub && <div>
                {item?.modules?.map((module, id) => (
                    <LispItemModule 
                        classes={classes}
                        id={id}
                        module={module}
                        payment={payment}
                        getModule={getModule}
                        router={router}
                        setShowPreview={setShowPreview}
                        site={site}
                        defenseLogin={defenseLogin}
                        defensePremium={defensePremium}
                        premiumHave={premiumHave}
                    />
                ))}
            </div>}
            {showPay && <div onClick={() => setShowPay(false)} className={classes.coursesItem__background}></div>}
        </div>
    )
}
export default LispItem