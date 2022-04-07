import React, {
    useContext
} from 'react'
import classes from './../../styles/layouts/office-layouts-styles.module.scss'
import Menu from './components/Menu'
import { lang } from './../../project/data';
import svgSprite from './../../project/svg/svgSprite';
import ContextApp from './../../context/App/ContextApp';
import { createToken } from './../../context/App/actions';
import { useRouter } from 'next/router';
import cookie from 'react-cookies';
import OfficeFooter from './components/OfficeFooter';
import logo from './../../project/image/logo.png'
import { useWindowSize } from '../../common/utils';

const Office = ({
    children,
    bgLight = false,
    auth = false
}) => {
    const router = useRouter()

    const outUser = () => {
        localStorage.removeItem('userToken')
        cookie.remove('userToken')
        router.push('/ru/auth/login')
    }
    return (
        <div className={!bgLight ? classes.officeWrapper : [classes.officeWrapper, classes.officeWrapper__custom].join(' ')}>
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
            {!auth && <div className={classes.officeWrapperFooter}>
                <OfficeFooter 
                    classes={classes}
                    configAll={lang}
                />
            </div>}
        </div>
    )
}
export default Office