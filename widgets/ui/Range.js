import React from 'react'

const Range = ({
    funcChange,
    value,
    classes
}) => {
    return (
        <div className={classes.controlsVolumeTrack}>
            <input 
                className={classes.controlsVolume}
                type="range"
                min="0" 
                max="1"
                step="0.1"
                value={String(value)}
                onChange={(e) => funcChange(e.target.value)}
            />
        </div>
    )
}
export default Range