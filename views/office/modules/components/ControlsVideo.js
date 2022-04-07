import React, {
    useState
} from 'react'
import Range from './../../../../widgets/ui/Range';
import Track from './video/Track';
import Volume from './video/Volume';
import svgSprite from './../../../../project/svg/svgSprite';
import Play from './video/Play';
import FullScreen from './video/FullScreen';

const ControlsVideo = ({
    showControls,
    classes,
    funcs,
    playing,
    volume,
    progress,
    onFastwind
}) => {
    return (
        showControls && <>
            <Play 
                funcs={funcs}
                playing={playing}
                classes={classes}
            />
            <div
                className={classes.controlsPlayFast}
                onClick={onFastwind}
            >+10</div>
            
            <div className={classes.controlsPanel}>
                <div></div>
                <div>
                    <Track 
                        progress={progress}
                        funcChange={funcs.progress}
                        classes={classes}
                    />
                </div>
                <div className={classes.controlsPanelRight}>
                    <Volume 
                        classes={classes}
                        volume={volume}
                        funcChange={funcs.volume}
                    />  
                    <FullScreen 
                        classes={classes}
                        funcChange={funcs.full}
                    />                   
                </div>
            </div>
        </>
    )
}
export default ControlsVideo