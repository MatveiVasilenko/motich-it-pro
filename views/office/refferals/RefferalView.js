import React, {
    useState, useEffect, useContext
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/refferal-view.styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import svgSprite from './../../../project/svg/svgSprite';
import ContextApp from './../../../context/App/ContextApp';
import { NET } from './../../../network';
import RefferalHead from './components/RefferalHead';
import RefferalBody from './components/RefferalBody';

const RefferalView = ({
    modules
}) => {

    const router = useRouter()
    const {stateApp} = useContext(ContextApp)
    const user = stateApp.user
    console.log(user)
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
    return (
        <div className={stylesOffice.containerOffice}>
            <RefferalHead 
                classes={classes}
                user={user}
                userData={userData}
            />
            <RefferalBody 
                classes={classes}
                user={user}
                userData={userData}
            />
        </div>
    )
}
export default RefferalView