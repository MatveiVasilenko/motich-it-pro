import React from 'react'
import svgSprite from '../../project/svg/svgSprite'
import classes from './../../styles/widgets/ui/back-styles.module.scss'

const Back = ({
    title,
    onClick
}) => {
    return (
        <div 
            className={classes.wrapper}
            onClick={onClick}
            >
            <div className={classes.wrapper__triangle}>
                {svgSprite('Triangle', {
                        width: '15px',
                        fill: '#c4c4c4'
                    })}
            </div>
            <div>{title}</div>
        </div>
    )
}
export default Back