import React from 'react'

const ProfileLispItem = ({
    classes,
    value,
    disabled,
    inputData,
    el,
    setInputData
}) => {
  
    
    return (
        <div className={classes.profileLispWrap}>
            <div className={classes.profileLispSvg}>{el.svg}</div>
            <input className={classes.profileLispItem} value={inputData[el.title]}  onChange={(e) => setInputData({
                ...inputData,
                [el.title]: e.target.value
            })}  disabled={disabled} type={el.type}/>
        </div>
    )
}
export default ProfileLispItem