import { React } from 'react';
import ReactPlayer from 'react-player';
const ReviewsCard = ({
    card, 
    styles, 
    idx,
    config
}) =>{
    return(
        <div key={`revCard${idx}`} className={styles.reviews__item_wrapper}>
            {config.type === 'video' ? <div>
                <ReactPlayer 
                    url={card}
                    width="100%"
                />
            </div> : <div className={styles.reviews__item_screen}>
                <img className={styles.reviews__item} alt="mion" src={card}/>
            </div>}  
        </div>

    )
}

export default ReviewsCard 