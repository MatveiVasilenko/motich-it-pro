import React from 'react'
import svgSprite from './../../../../../project/svg/svgSprite';

const FullScreen = ({
    funcChange,
    classes
}) => {
    return (
        <div 
            onClick={funcChange}
            className={classes.controlsIcon}
        >
            {svgSprite('FullScreen', {
                width: '35px',
                height: '35px'
            })}
        </div>
    )
}
export default FullScreen