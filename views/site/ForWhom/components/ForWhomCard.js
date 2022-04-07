import { React } from 'react';
const ForWhomCard = ({card, styles, idx}) =>{
    return(
        <div className={styles.for_whom__item}>
          <div  className={styles.global__subtitle}>{card.whomTitle}</div>
          {/* <hr className={styles.global__line} align="center" width="140" size="4" color="#085155" /> */}
          <div  className={styles.for_whom__item__text}>{card.whomText}</div>
        </div>
    )
}

export default ForWhomCard 