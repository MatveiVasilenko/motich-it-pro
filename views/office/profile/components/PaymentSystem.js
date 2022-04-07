import React from 'react'
import { useRouter } from 'next/router';
import { DATA } from './../../../../project/data';

const PaymentSystem = ({
    classes,
    stylesOffice,
    user,
    payment
}) => {
    const router = useRouter()
    const goToHome = () => {
        router.push('/ru/office')
    }
    const companies_id = DATA.companies_id

    return (
        <div className={classes.payment}>
            {+payment === 1 ? <div className={classes.payment__noPay}>
                    <div className={classes.payment__noPay__title}>Ваш аккаунт активирован до <span className={classes.payment__noPay__day}>{JSON.parse(user?.companies_id).filter(el => +el.id === +companies_id)[0].day_end}</span></div>
                    <div>
                        <button onClick={goToHome} className={stylesOffice.btn}>Продлить</button>
                    </div>
                </div> : +payment === 2 ? <div className={classes.payment__noPay}>
                    <div className={classes.payment__noPay__title}>Ваша заявка находится на рассмотрении.<br/> Если в течении 24 часов аккаунт не стал активным повторите заявку</div>
                    <div>
                        <button onClick={goToHome} className={stylesOffice.btn}>Повторить заявку</button>
                    </div>
                </div> : <div className={classes.payment__noPay}>
                    <div className={classes.payment__noPay__title}>Платная подписка на Вашем аккаунте закончилась или не была куплена</div>
                    <div>
                        <button onClick={goToHome} className={stylesOffice.btn}>Оплатить подписку</button>
                    </div>
                </div>}
            <div style={{
                textAlign: 'center',
                padding: '12px'
            }}>Для отмены подписки обратитесь в поддержку по email: mion.courses@gmail.com</div>
        </div>
    )
}
export default PaymentSystem