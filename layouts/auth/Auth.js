import React from 'react'
import classes from './../../styles/layouts/auth-layouts-styles.module.scss'
import Menu from './components/Menu'
import logo from './../../project/image/logo.png'

const Auth = ({
    children,
    bgLight = false
}) => {
    return (
        <div className={!bgLight ? classes.authWrapper : [classes.authWrapper, classes.authWrapper__custom].join(' ')}>
            <div className={classes.officeWrapperHeader}>
                <div className={classes.officeLogo}>
                    <img src={logo} />
                </div>
                <div>
                    <Menu />
                </div>
            </div>
            <div className={classes.officeWrapperBody}>
                <div className={classes.officeWrapperContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Auth