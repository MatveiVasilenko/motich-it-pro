import React from 'react'
import { DATA, price } from './../../../../project/data';

const SalesItem = ({
    styles,
    configAll
}) => {
    return (
        <div className={styles.sales__item}>
            <span className={styles.sales__item__number}>${(price / 28).toFixed(2)}</span><span>{configAll.language === 'ru' ? 'мес' : 'міс'}</span>
        </div>
    )
}
export default SalesItem