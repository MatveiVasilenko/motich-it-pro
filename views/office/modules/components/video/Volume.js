import React, {
    useState
} from 'react'
import svgSprite from './../../../../../project/svg/svgSprite';
import Range from './../../../../../widgets/ui/Range';

const Volume = ({
    volume,
    classes,
    funcChange
}) => {
    const [showVolume, setShowVolume] = useState(false)

    return (
        <div className={classes.controlsVolumeWrapper}>
            <div
                onClick={() => setShowVolume(!showVolume)}
                className={classes.controlsIcon}
            >
                {svgSprite('Volume', {
                    width: '35px',
                    height: '35px'
                })}
            </div>
            {showVolume && <Range 
                value={volume}
                funcChange={funcChange}
                classes={classes}
            />}
        </div>
    )
}
export default Volume