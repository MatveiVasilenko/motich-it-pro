import React, { useEffect } from 'react';
import svgSprite from './../../../../project/svg/svgSprite';
import { site_styles } from './../../../../project/styles/style-js-var';

const WorriesCard = ({card, styles, idx}) =>{
    return(
        <div className={[styles.worries__item, 'wow', 'fadeInDown'].join(' ')} data-wow-delay={`${idx * 0.1}s`}>
            <div className={styles.worries__item__svg}>
              {svgSprite('TriangleEx', {
                style: {
                  fill: site_styles.svgColorWorries
                }
              })}
            </div>
            <div dangerouslySetInnerHTML={{__html: card.subText}}></div>
        </div>
    )
}

export default WorriesCard 