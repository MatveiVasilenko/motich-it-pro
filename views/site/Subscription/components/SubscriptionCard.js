import { React } from 'react';
import { CONFIG } from './../../../../project/config';
const SubscriptionCard = ({card, styles, idx, goApp, configAll}) =>{
    const lang = configAll.language
    return(
        <div onClick={goApp} className={[styles.subscription__item_wrapper, 'wow', 'fadeInRight'].join(' ')} data-wow-delay={`${0.1 * idx}s`} key={`card${idx}`}>
            <div className={styles.subscription__item}>
                <div className={styles.subscription__item__maxprice}>${(card.maxPrice / 28).toFixed(2)}</div>
                <div className={styles.subscription__item__lowprice}>${(card.lowPrice / 28).toFixed(2)}</div>
                <div className={styles.subscription__item__footer}>
                    <div className={styles.subscription__item__btn}><button>{lang === 'ru' ? 'Оплатить' : 'Сплатити'}</button></div>
                    <div className={styles.subscription__item__duration}>{card.duration}</div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard 