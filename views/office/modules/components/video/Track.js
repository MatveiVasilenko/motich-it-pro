import React from 'react'

const Track = ({
    progress,
    funcChange,
    classes
}) => {
    return (
        <div className={classes.controlsTrackWrapper}>
            <input 
                type="range"
                min={0} 
                max={progress.loadedSeconds}
                value={progress.play}
                onChange={(e) => funcChange(e.target.value)}
                className={classes.controlsTrack}
            />
        </div>
    )
}
export default Track