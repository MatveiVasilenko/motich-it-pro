import { React } from 'react';
const OpportunitiesCard = ({card, styles, idx}) =>{
    return(
      <div className={[styles.opportunities__row__item, 'wow', 'fadeInUp'].join(' ')} data-wow-delay={`${0.1 * idx}s`}>
        <div className={styles.opportunities__row__item__img}><img alt='image' src={`${card.img}`}/></div>
        <div dangerouslySetInnerHTML={{__html: card.text}} className={styles.opportunities__row__item__text}></div>
    </div>
    )
}

export default OpportunitiesCard 