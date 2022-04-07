
const ActivitiCard = ({card, styles, idx}) =>{
    return(
        <div key={`card${idx}`} className={[styles.activityCards__item, 'wow', 'fadeInLeft'].join(' ')} data-wow-delay={`${0.1 * idx}s`}>
            <div className={styles.activityCards__item__inner}>
                <div className={idx % 2 ? [styles.activityCards__item__image, styles.activityCards__item__image_order].join(' ') : styles.activityCards__item__image}>
                    <img src={card.img}/>
                </div>
                <div className={styles.activityCards__item__block}>
                    <div className={styles.activityCards__item__block__title}>{card.title}</div>
                    <div dangerouslySetInnerHTML={{__html: card.text}}></div>
                </div> 
            </div>
        </div>
    )
}

export default ActivitiCard 