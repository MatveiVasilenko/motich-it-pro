import { React } from 'react';
import svgSprite from '../../../../project/svg/svgSprite';
const WarrantyCard = ({card, styles, idx}) =>{
    let color = '#FFFF00'
    let svg = 'ReturnMoney'
    if (idx === 1) {
        color = '#00EEFD'
        svg = 'GraficUp'
    } else if (idx === 2) {
        color = '#7AFF6F'
        svg = 'Raketa'
    }
    return(
        <div className={[styles.warranty__item, 'wow', 'fadeInLeft'].join(' ')} data-wow-delay={`${0.1 * idx}s`}>
            <div className={styles.warranty__item__circle}>
                {svgSprite('Circle', {
                    stroke: color
                })}
            </div>
            <div style={{
                color
            }} className={styles.warranty__item__number}>0{idx + 1}</div>
            <div className={styles.warranty__item__header}>
                <div className={styles.warranty__item__header__title}>{card.subTitle}</div>
                {svgSprite(svg, {
                    width: '40px',
                    height: '40px',
                    fill: color
                })}
            </div>
            <div className={styles.warranty__item__text} dangerouslySetInnerHTML={{__html: card.subText}}></div>
        </div>
    )
}

export default WarrantyCard 