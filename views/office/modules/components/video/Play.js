import React from 'react'
import svgSprite from './../../../../../project/svg/svgSprite';

const Play = ({
    classes,
    funcs,
    playing
}) => {
    return (
        <div 
            className={classes.controlsPlay}
            onClick={funcs.play}
            >
                {!playing ? svgSprite('Play', {
                    width: '80px',
                    height: '120px'
                }) : svgSprite('Pause', {
                    width: '70px',
                    height: '90px'
                })}
        </div>
    )
}
export default Play