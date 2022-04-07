import React, {
    useEffect
} from 'react'
import classes from './../../styles/layouts/site-layouts-styles.module.scss'
import Preloader from './Preloader';

const Site = ({
    children,
    light = false,
    bgImage = false,
    first = false,
    video = false,
    smallPadding = false,
    noPadding = false,
    backgroundPosition = 'center center',
    backgroundSize = 'cover',
    id = '#'
}) => {
    let classWrapper = ''
    if (smallPadding) {
        classWrapper = [classes.wrapper, classes.wrapper_smallPadding].join(' ')
    } else if (noPadding) {
        classWrapper = [classes.wrapper, classes.wrapper_noPadding].join(' ')
    } else {
        if (first) {
            classWrapper = [classes.wrapper, classes.wrapper_first].join(' ')
        } else {
            classWrapper = [classes.wrapper, classes.wrapper_section].join(' ')
        }
    }
    useEffect(() => {
        if(typeof window !== 'undefined') {
    
          window.WOW = require('wowjs');
        }
        new WOW.WOW({
          mobile: false
        }).init();
      }, [])
    return (
        video ? <div className={classes.wrapper_video}>
            <Preloader 
                classes={classes}
            />
            <div className={classes.wrapper_video__block}>
                <div className={light ? [classes.container, classes.container_light].join(' ') : classes.container}>
                    {children}
                </div>
            </div>
            <video
                autoPlay={true}
                loop={true}
                controls={false}
                muted
                className={classes.firstVideo}
                >
                <source 
                    src={video}
                    
                />
            </video>
        </div> : <div 
            id={id}
            style={{
                background: `${bgImage}`,
                backgroundSize,
                backgroundPosition,
                backgroundRepeat: 'no-repeat'
            }} 
            className={classWrapper}
            >
            <Preloader 
                classes={classes}
            />
            <div className={light ? [classes.container, classes.container_light].join(' ') : classes.container}>
                {children}
            </div>
        </div>
    )
}
export default Site