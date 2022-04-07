import React, {
    useContext
} from 'react'
import classes from './../../styles/layouts/admin-layouts-styles.module.scss'
import Menu from './components/Menu'
import { DATA } from './../../project/data';
import svgSprite from './../../project/svg/svgSprite';
import ContextApp from './../../context/App/ContextApp';
import { createToken } from './../../context/App/actions';
import { useRouter } from 'next/router';
import cookie from 'react-cookies';
import logo from './../../project/image/logo.png'

const Admin = ({
    children,
}) => {
    const router = useRouter()

    const outUser = () => {
        localStorage.removeItem('userToken')
        cookie.remove('userToken')
        router.push('/ru/auth/login')
    }
    const goTelegram = () => {
        window.open(DATA.telegram)
    }
    return (
        <div className={classes.officeWrapper}>
            <div className={classes.officeWrapperHeader}>
                <div>
                    {/* {configMenu.map((el) => (
                        <div>{el.title}</div>
                    ))} */}
                    <div className={classes.logo}>
                        <img src={logo}/>
                    </div>
                </div>
                <div className={classes.officeSocial}>
                    <div 
                        onClick={goTelegram}
                        className={classes.officeSocialItem}>
                        {svgSprite('Telegram', {
                            width: '30px',
                        })}
                    </div>
                    {/* <div 
                        className={classes.officeSocialItem}
                        onClick={outUser}
                        >
                        {svgSprite('Out', {
                            width: '40px',
                            height: '25px'
                        })}
                    </div> */}
                </div>
            </div>
            <div className={classes.officeWrapperBody}>
                <Menu 
                    classes={classes}
                />
                <div className={classes.officeWrapperContent}>
                    {children}
                </div>
            </div>
            {/* <div className={classes.officeWrapperFooter}>
                <OfficeFooter 
                    classes={classes}
                />
            </div> */}
        </div>
    )
}
export default Admin