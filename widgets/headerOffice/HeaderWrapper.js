import React, {
    useState, useEffect, useContext, useMemo
} from 'react'
import ContextApp from './../../context/App/ContextApp';
import { NET } from './../../network';
import classes from './../../styles/widgets/header-office-styles.module.scss'
import HeaderItem from './HeaderItem';
import { getDataHeader } from './initData';

const HeaderWrapper = ({

}) => {
    const {stateApp} = useContext(ContextApp)
    const user = stateApp.user
    
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
    
    const dataHeader = useMemo(() => {
        getDataHeader()
    }, [setCounter])
    return (
        <div className={classes.head}>
            {dataHeader && dataHeader.map(() => (
                <HeaderItem 
                    classes={classes}
                />
            ))}
        </div>
    )
}
export default HeaderWrapper