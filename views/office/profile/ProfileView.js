import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import classes from './../../../styles/views/profile-view-styles.module.scss'
import MainHead from './../main/components/MainHead';
import ContextApp from './../../../context/App/ContextApp';
import ProfileLisp from './components/ProfileLisp';
import ProfileImage from './components/ProfileImage';
import PaymentSystem from './components/PaymentSystem';
import { DATA } from './../../../project/data';


const ProfileView = ({

}) => {
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const companies_id = DATA.companies_id
    let payment = 0
    if (stateApp?.user?.companies_id) {
        const payDefender = JSON.parse(stateApp.user.companies_id).filter(el => +el.id === +companies_id)
        if (payDefender.length) {
            payment = 1
        } else {
            if (+stateApp?.user?.status === 2) {
                payment = 2
            }
        }
    }
    useEffect(() => {
        
    }, [stateApp, payment])
    return (
        <div className={classes.profileContainer}>
            <div className={classes.profileTitle}>Профиль</div>
            <div className={classes.profileInfoBlock}>
                <div className={classes.profileInfoFirst}>
                    <div className={classes.profileImageBlock}>
                        <ProfileImage classes={classes}/>
                    </div>
                </div>
                <div className={classes.profileInfoSecond}>
                    <PaymentSystem 
                        payment={payment}
                        classes={classes}
                        stylesOffice={stylesOffice}
                        user={stateApp.user}
                    />
                    <div className={classes.profileDataBlock}>
                        <ProfileLisp 
                            classes={classes}
                            user={stateApp.user || {}}
                        />
                    </div>  
                </div>
           </div>
        </div>
        // <div className={stylesOffice.containerOffice}>
        //     {/* {payment === '1' &&<MainHead 
        //         classes={classes}
        //     />} */}
        //     <div className={classes.profileWrapper}>
        //         <div className={classes.profileItemLeft}>
        //             <ProfileButtonEnd 
        //                 classes={classes}
        //                 date={stateApp.user.day_end}
        //                 /> 
        //             <div>
        //                 <ProfileLisp 
        //                     classes={classes}
        //                     user={stateApp.user || {}}
        //                     />
        //             </div>
        //         </div>
        //         <div className={classes.profileItemCenter}>
        //             <ProfileImage classes={classes}/> 
        //         </div>
        //         <div className={classes.profileItemRight}>
        //             <ProfileLink 
        //                 classes={classes}
        //                 link={stateApp.user.refferal_key || ''}
        //             />
        //         </div>
        //     </div>
        // </div>
    )
}
export default ProfileView