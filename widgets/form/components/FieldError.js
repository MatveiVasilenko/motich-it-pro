import React from 'react'

const FieldError = ({
    classes,
    textError
}) => {
    return (
        <div className={classes.fieldError}>{textError}</div>
    )
}
export default FieldError