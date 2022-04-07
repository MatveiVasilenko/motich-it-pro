import React, {
    useRef, useState
} from 'react'
import { configMenu } from './initData';
import svgSprite from './../../../project/svg/svgSprite';
import {useRouter} from 'next/router'
import cookie from 'react-cookies';
import useWindowDimensions from './../../../global/utils';

const Menu = ({
    classes
}) => {

    const { width } = useWindowDimensions();    
    const mobile = width < 768 ? true : false
    const router = useRouter()
    const refMenu = useRef(null)
    const [active, setActive] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={openMenu ? [classes.adminWrapperMenu, classes.adminWrapperMenu_open].join(' ') : classes.adminWrapperMenu}>
        
        {!mobile ? <div ref={refMenu} >
            <div
                onClick={() => {
                    setOpenMenu(!openMenu)
                }}
                className={classes.burger}
            >
                {svgSprite('Menu', {
                            width: '25px',
                            height: '25px',                                
                        })}
            </div>
        {configMenu.map((item, idx) => (
                <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={() => {
                        router.push(item.path)
                        setActive(idx)
                    }}
                    key={`itemMenu${idx}`}
                    >
                    <div 
                        styles={{
                            fill: 'inherit',
                            stroke: 'inherit'
                        }}
                        className={classes.itemMenu}
                    >
                        <div styles={{
                                fill: 'inherit',
                                stroke: 'inherit'
                            }}
                            className={classes.itemMenu__svg}
                        >
                            {svgSprite(item.svg, {
                                width: '25px',
                                
                            })}
                        </div>
                        {openMenu && <div className={classes.itemMenu__title}>{item.title}</div>}
                    </div>
                 </div> 
                ))}
                {/* <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={outUser}
                    >
                    <div 
                        styles={{
                            fill: 'inherit',
                            stroke: 'inherit'
                        }}
                    >
                        <div styles={{
                            fill: 'inherit',
                            stroke: 'inherit'

                        }}>
                            {svgSprite(item.svg, {
                                width: '55px',
                                height: '45px',
                                
                            })}
                        </div>
                        <div>Выход</div>
                    </div>
                 </div> */}
            </div>: 
            <div className={classes.menuMob}>
                {configMenu.map((item, idx) => (
                    <div 
                        className={classes.menuMobSvg}
                        onClick={() => router.push(item.path)}
                        key={`itemMenuMob${idx}`}
                        >
                        {svgSprite(item.svg, {
                            width: '40px',
                            height: '40px',                                
                        })}
                    </div>
                 ))}
            </div>}
        </div>
    )
}
export default Menu