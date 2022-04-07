import React, {
    useState
} from 'react'
import { transformWordCount } from './../utils';
import { NET } from './../../../../network';
import { useRouter } from 'next/router';
import { DATA, lang } from './../../../../project/data';
import svgSprite from '../../../../project/svg/svgSprite';

const MainTarifCard = ({
    premium,
    classes,
    data,
    userId,
    site,
    idx
}) => {
    const [dataOrder, setDataOrder] = useState({
        data: '',
        signature: ''
    })
    const langData = {
        btn: lang === 'ru' ? 'Подписаться' : 'Підписатися',
        month: lang === 'ru' ? 'месяц' : 'місяц',
    }
    let cardData = {}
    if (idx === 0) {
        cardData.svg = 'SubLight'
        cardData.title = 'Light'
        cardData.color = '#1568C6'
        cardData.darkColor = '#054996'
    } else if (idx === 1) {
        cardData.svg = 'SubBasic'
        cardData.title = 'Basic'
        cardData.color = '#FF072E'
        cardData.darkColor = '#B3041F'
    } else if (idx === 2) {
        cardData.svg = 'SubGold'
        cardData.title = 'Gold'
        cardData.color = '#F99B31'
        cardData.darkColor = '#E78210'
    } else if (idx === 3) {
        cardData.svg = 'SubPro'
        cardData.title = 'Pro'
        cardData.color = '#009B8B'
        cardData.darkColor = '#006359'
    }
    const router = useRouter()
    const payHandler = async () => {
        if (userId) {
            let date = new Date()
            date = date.toISOString().slice(0,10)
            console.log(date)
            const json_string = +data.mounth === 1 ? {
                "public_key":"i22684040376",
                "version":"3",
                "action":"subscribe",
                "amount":`${data.sale}`,
                // "amount":`1`,
                "currency":"UAH",
                "description":`Подписка на ${data.mounth} месяц`,
                "result_url": site ? `${NET.FRONT_URL_MAIN}/ru/auth/register` : `${NET.FRONT_URL_MAIN}/ru/office/profile`,
                "server_url": `${NET.SERVER_PAY}`,
                'user_id': userId,
                "companies_id": DATA.companies_id,
                "subscribe": "1",
                "subscribe_date_start": `${date} 00:00:00`,
                "subscribe_periodicity": 'month'
            } : {
                "public_key":"i22684040376",
                "version":"3",
                "action":"pay",
                "amount":`${data.sale}`,
                "currency":"UAH",
                "description":`Подписка на ${data.mounth} месяц`,
                "result_url": site ? `${NET.FRONT_URL_MAIN}/ru/auth/register` : `${NET.FRONT_URL_MAIN}/ru/office/profile`,
                "server_url": `${NET.SERVER_PAY}`,
                'user_id': userId,
                "companies_id": DATA.companies_id
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
                    setDataOrder({
                        data,
                        signature
                    })
                    window.open(`https://www.liqpay.ua/api/3/checkout?data=${data}&signature=${signature}`, '_self')
                }
            })
        } else {
            router.push('/ru/auth/login')
        }
        
    }
    return (
        <div className={classes.mainTarifCardWrapper}>
            {premium ? <div className={[classes.mainTarifCard, classes.mainTarifCardPremium].join(' ')}>
                <div className={classes.mainTarifCardPremiumTitle}>Уже скоро</div>
                <div className={classes.mainTarifCardPremiumSubtitle}>+ индивидуальные консультации</div>
            </div> : <div 
                        className={classes.mainTarifCard}
                        onClick={payHandler}
                        key={`card${idx}`}
                        >
                            <div className={classes.mainTarifCard__wrapper}>
                                <div className={classes.mainTarifCard__header}>
                                    <div className={classes.mainTarifCardMounth}>{data.mounth} {langData.month}{transformWordCount(data.mounth, lang)}</div>
                                    <div style={{
                                        color: cardData.color
                                    }} className={classes.mainTarifCard__header__title}>{cardData.title}</div>
                                </div>
                                <div className={classes.mainTarifCard__image}>
                                    {svgSprite(cardData.svg)}
                                </div>
                                <div className={classes.mainTarifCard__price}>{(data.price / 28).toFixed(2)} $</div>
                                <div style={{
                                        backgroundColor: cardData.color
                                    }} className={classes.mainTarifCard__sale}>
                                     {(data.sale / 28).toFixed(2)} $
                                </div>
                                <div style={{
                                        backgroundColor: cardData.color
                                    }} className={classes.mainTarifCard__btn}>{langData.btn}</div>
                            </div>
                            <div style={{
                                        backgroundColor: cardData.darkColor
                                    }} className={classes.mainTarifCard__sale_rect}></div>
                            <div style={{
                                        backgroundColor: cardData.darkColor
                                    }} className={classes.mainTarifCard__btn_rect}></div>
                        </div>}
        </div>
    )
}
export default MainTarifCard