import React from 'react'
import svgSprite from '../../../../project/svg/svgSprite'
import { site_styles } from './../../../../project/styles/style-js-var';

const Sales = ({
    styles
}) => {
    return (
        <div className={styles.sales}>
            {svgSprite('Sales', {}, {
                start: site_styles.startGradientSales,
                end: site_styles.endGradientSales
            })}
        </div>
    )
}
export default Sales