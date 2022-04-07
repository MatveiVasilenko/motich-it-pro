import React, {
    useContext, useEffect, useState
} from 'react'
import HeaderItem from '../../../../widgets/headerOffice/HeaderItem'
import ContextApp from './../../../../context/App/ContextApp';
import { NET } from './../../../../network';
import useWindowDimensions from './../../../../global/utils';
import svgSprite from './../../../../project/svg/svgSprite';

const MainHead = ({
    classes
}) => {
    const {stateApp} = useContext(ContextApp)
    const user = stateApp.user

    const { width } = useWindowDimensions();    
    const mobile = width < 768 ? true : false
    
    const [userData, setUserData] = useState(null)
    useEffect(async () => {
        let cleanupFunction = false;
        if (user) {
            (async () => {
                fetch(`${NET.BACK_URL}/refferals/${user.id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        // 'X-Requested-With': 'XMLHttpRequest'
                        // 'Authorization': 'Bearer ' + this.state.clientToken,
                    },
                    withCredentials: true,
                }).then((response) => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            if(!cleanupFunction) setUserData(data)   
                            
                        })
                    }
                })
            })()            
        }
        return () => cleanupFunction = true
    }, []);
    const [counter, setCounter] = useState({
        all: 0,
        realMoney: 0,
        futureMoney: 0,
        active: 0
    })
    useEffect(() => {
        if (userData) {
            let active = 0
            let all = 0
            let realMoney = 0
            let futureMoney = 0
            for (let value in userData) {
                if (userData[value]) {
                    userData[value].map((el) => {
                        all++
                        if (el.status === '1') {
                            active++
                            if (value === 'first') {
                                realMoney = realMoney + 10
                                futureMoney = futureMoney + 10
                            } else if (value === 'second') {
                                realMoney = realMoney + 5
                                futureMoney = futureMoney + 5
                            } else if (value === 'third') {
                                futureMoney = futureMoney + 3
                            }
                        }
                    })
                }
            }
            setCounter({all, active, realMoney, futureMoney})
        }
    }, [userData])
    return (
        !mobile ? <div className={classes.refferalHead}>
            <HeaderItem 
                classes={classes}
                svg={{
                    name: '',
                    styles: {}
                }}
                title={{
                    tarif: 'Ваш пакет',
                    date: 'действителен до '
                }}
                value={{
                    tarif: 'Standard',
                    date: user ? user.day_end : ''
                }}
                type="tarif"
            />
            <HeaderItem 
                classes={classes}
                svg={{
                    name: '',
                    styles: {}
                }}
                title="Баланс"
                value={user ? user.money + ' y.e' : '0 y.e'}
                type="count"
            />
            <HeaderItem 
                classes={classes}
                svg={{
                    name: '',
                    styles: {}
                }}
                title="Расчетный доход"
                value={counter.realMoney + ' y.e'}
                type="count"
            />
            <HeaderItem 
                classes={classes}
                svg={{
                    name: '',
                    styles: {}
                }}
                title="Партнеры"
                value={counter.active}
                type="count"
            />
        </div>:
        <div className={classes.refferalHeadMob}>
        <div className={classes.refferalHeadItemMob}>
            <div className={classes.refferalHeadItemWrapperMob}>
                <div>
                    {svgSprite('Star', {
                        width: '20px',
                        height: '20px'
                    })}
                </div>
            </div>
            <div>
                <div className={classes.refferalHeadItemNumberMob}>Standard</div>
            </div>
            <div>
                <div className={classes.refferalHeadItemTextMobSmall}>Тариф</div>
            </div>
        </div>
        <div className={classes.refferalHeadItemMob}>
            <div className={classes.refferalHeadItemWrapperMob}>
                <div>
                    {svgSprite('Clock', {
                        width: '20px',
                        height: '20px'
                    })}
                </div>
            </div>
            <div>
                <div className={classes.refferalHeadItemNumberMobSmall}>{user.day_end}</div>
            </div>
            <div>
                <div className={classes.refferalHeadItemTextMobSmall}>Действ. до</div>
            </div>
        </div>
        <div className={classes.refferalHeadItemMob}>
            <div className={classes.refferalHeadItemWrapperMob}>
                <div style={{'margin-right': '3px'}}>
                    {svgSprite('MoneyList', {
                        width: '13px',
                        height: '13px'
                    })}
                </div>
                <div className={classes.refferalHeadItemTextMob}>Баланс</div>
            </div>
            <div>
                <div className={classes.refferalHeadItemNumberMob}>{user && user.money}</div>
            </div>
        </div>
        <div className={classes.refferalHeadItemMob}>
            <div className={classes.refferalHeadItemWrapperMob}>
                <div>
                    {svgSprite('Money', {
                        width: '20px',
                        height: '20px'
                    })}
                </div>
            </div>
            <div>
                <div className={classes.refferalHeadItemNumberMob}>{counter.realMoney}</div>
            </div>
            <div>
                <div className={classes.refferalHeadItemTextMobSmall}>Доход</div>
            </div>
        </div>
        <div className={classes.refferalHeadItemMob}>
            <div className={classes.refferalHeadItemWrapperMob}>
                <div>
                    {svgSprite('Users', {
                        width: '20px',
                        height: '20px'
                    })}
                </div>
            </div>
            <div>
                <div className={classes.refferalHeadItemNumberMob}>{counter.active}</div>
            </div>
            <div>
                <div className={classes.refferalHeadItemTextMobSmall}>Партнеры</div>
            </div>
        </div>            
    </div> 
    )
}
export default MainHead