import { React } from 'react';
const Diplom = ({card, styles, idx}) =>{
    return(
        <div className={styles.expert__col__row__diplom__img}><img alt="mion" src={card.diplomImg}/></div> 
    )
}

export default Diplom 