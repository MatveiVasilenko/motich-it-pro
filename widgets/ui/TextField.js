import React from 'react'
import classes from './../../styles/widgets/textfield-styles.module.scss'

const TextField = ({
    children
}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}
export default TextField