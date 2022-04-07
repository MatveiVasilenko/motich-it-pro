import React from 'react'

const MainFooter = ({
    classes
}) => {
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerTitle}>Условия возврата денег за услуги</div>
            <div className={classes.footerText}>1. Если Вы или кто-то из Вашей семьи ошибочно купили подписку, Вы можете в течении 24 часов после оформление подписки обратиться в Telegram, для запроса на возврат средств</div>
            <div className={classes.footerText}>2. Если Вас не удовлетворил тот контент, за который Вы заплатили подписку - Вы имеете право подать запрос на возврат средств в течении 48 часов после покупки.</div> 
        </div>
    )
}
export default MainFooter