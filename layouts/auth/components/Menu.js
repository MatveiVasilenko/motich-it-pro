import React, {
    useRef, useContext, useEffect, useState, useMemo
} from 'react'
import cookie from 'react-cookies';
import { getConfigMenu } from './initData';
import svgSprite from './../../../project/svg/svgSprite';
import classes from './../../../styles/layouts/office-layouts-styles.module.scss'
import {useRouter} from 'next/router'
import ContextApp from './../../../context/App/ContextApp';
import { useWindowSize } from '../../../common/utils';
import { deleteToken } from '../../../context/App/actions';
import { lang } from '../../../project/data';

const Menu = () => { 
    const size = useWindowSize()
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        if (size.width > 768) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    })
    const router = useRouter()
    const refMenu = useRef(null)
    const {stateApp, dispatchApp} = useContext(ContextApp)
    const user = stateApp?.user
    const configMenu = useMemo(() => {
        return getConfigMenu(lang)
    }, [])
    const [showModalProfile, setShowModalProfile] = useState(false)
    const [showMenuBar, setShowMenuBar] = useState(false)

    const outHandler = () => {
        dispatchApp(deleteToken())
        localStorage.removeItem('userToken')
        cookie.remove('userToken')
        router.push('/ru/office')
    }
    return (
        <>
        {!mobile ? <div className={classes.officeWrapperMenu} ref={refMenu} >
        {configMenu.map((item, idx) => (
                <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={() => router.push(item.path)}
                    key={`itemMenu${idx}`}
                    >
                    
                        <div>{item.title}</div>
                 </div> 
                ))}
                {user ? <div className={classes.officeWrapperMenu__profile}>
                    <div 
                        className={classes.officeWrapperMenu__profile__item}
                        onClick={() => setShowModalProfile(!showModalProfile)}
                        >
                        {user?.name.substr(0,1) + user?.surname.substr(0,1)}
                    </div>
                    {showModalProfile && <div onClick={() => setShowModalProfile(false)} className={classes.officeWrapperMenu__profile__background}></div>}
                    {showModalProfile && <div className={classes.officeWrapperMenu__profile__modal}>
                            <div 
                                className={classes.officeWrapperMenu__profile__modal__item}
                                onClick={() => router.push('/ru/office/profile')}                                
                                >Профиль</div>
                            <div 
                                className={classes.officeWrapperMenu__profile__modal__item}
                                onClick={() => window.open('https://t.me/joinchat/Rs1iX46Lw_euN2Ra')}
                                >
                                <div>Сообщество</div>
                                {svgSprite('Telegram', {
                                    style: {
                                        width: '15px',
                                        fill: 'rgba(8, 83, 83, 1)'
                                    }
                                })}
                            </div>
                            <div 
                                className={classes.officeWrapperMenu__profile__modal__item}
                                onClick={outHandler}
                                >Выйти</div>
                        </div>}
                </div> : <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={() => router.push('/ru/auth/login')}
                    >Войти</div>}
            </div>: 
            <div>
                <div 
                    className={classes.menuBurger}
                    onClick={() => setShowMenuBar(!showMenuBar)}
                    >
                    {svgSprite('Menu')}
                </div>
                <div className={showMenuBar ? classes.menuBar : [classes.menuBar, classes.menuBar_hiddens].join(' ')}>
                    {user && <div 
                            className={classes.menuBar__profileIcon}
                            onClick={() => setShowModalProfile(!showModalProfile)}
                            >
                            {user?.name.substr(0,1) + user?.surname.substr(0,1)}
                    </div>}
                    {configMenu.map((item, idx) => (
                        <div 
                            className={classes.menuBar__item}
                            onClick={() => router.push(item.path)}
                            key={`itemMenu${idx}`}
                            >
                            
                                <div>{item.title}</div>
                        </div> 
                    ))}
                    {user ? <div className={classes.menuBar__profile}>
                                <div 
                                    className={classes.menuBar__profile__item}
                                    onClick={() => router.push('/ru/office/profile')}                                
                                    >Профиль</div>
                                <div 
                                    className={classes.menuBar__profile__item}
                                    onClick={() => window.open('https://t.me/joinchat/Rs1iX46Lw_euN2Ra')}
                                    >
                                    <div>Сообщество</div>
                                    {svgSprite('Telegram', {
                                        style: {
                                            width: '15px',
                                            fill: 'rgba(8, 83, 83, 1)'
                                        }
                                    })}
                                </div>
                                <div 
                                    className={classes.menuBar__profile__item}
                                    onClick={outHandler}
                                    >
                                    Выйти
                                </div>
                            </div>: <div 
                        className={classes.menuBar__profile__item}
                        onClick={() => router.push('/ru/auth/login')}
                        >Войти</div>}
                    </div>
                </div>}
            {mobile && <div className={classes.menuMob}>
                {configMenu.map((item, idx) => (
                    <div 
                        className={classes.menuMobSvg}
                        onClick={() => router.push(item.path)}
                        key={`itemMenuMob${idx}`}
                        >
                        {svgSprite(item.svg, {
                            height: '18px',                                
                        })}
                        <div>{item.title}</div>
                    </div>
                 ))}
            </div>}
        </>
    )
}
export default Menu