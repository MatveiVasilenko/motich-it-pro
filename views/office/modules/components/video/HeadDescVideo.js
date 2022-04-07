import React, {
    useContext, useCallback
} from 'react'
import logo from '../../../../../project/image/logo.png'
import ContextApp from './../../../../../context/App/ContextApp';
import { useRouter } from 'next/router';
import { DATA } from '../../../../../project/data';
import Likes from '../likes/Likes';


const HeadDescVideo = ({
    stylesOffice,
    classes,
    likes,
    idModule,
    setModuleData
}) => {
    const {stateApp} = useContext(ContextApp)
    const user = stateApp?.user
    const router = useRouter()
    const handleSubscribe = useCallback(() => {
        if (!user) {
            router.push('/ru/office')
        } 
    }, [user])
    return (
            <div className={classes.headDescVideo}>
                <div className={classes.headDescVideo__head}>
                    <div className={classes.headDescVideo__head__logo}>
                        <img src={logo}/>
                    </div>
                    <div>
                        <div className={classes.headDescVideo__head__title}>{DATA.name}</div>
                        <div className={classes.headDescVideo__head__subcribe}>213 подписчиков</div>
                    </div>
                </div>
                <Likes 
                    classes={classes}
                    likes={likes}
                    idModule={idModule}
                    setModuleData={setModuleData}
                />
                <div 
                    className={classes.headDescVideo__head__btn}
                    onClick={handleSubscribe}
                    >
                    <button
                        className={user ? [stylesOffice.btn, stylesOffice.btn_disabled].join(' ') :stylesOffice.btn}
                    >{user ? 'Вы подписаны' : 'Подписаться'}</button>
                </div>
            </div>
        )
}
export default HeadDescVideo