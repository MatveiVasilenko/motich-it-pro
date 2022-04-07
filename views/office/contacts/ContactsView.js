import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/contact-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import ContextApp from '../../../context/App/ContextApp';
import {DATA} from './../../../project/data'
import FirstBlock from './contactsBlocks/firstBlock';
import SecondBlock from './contactsBlocks/secondBlock';

const ContactsView = () => {
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const payment = stateApp.user &&  stateApp.user.status ? stateApp.user.status : '0'
   

    return (
        // <div className={stylesOffice.containerOffice}>
        //     <div className={classes.contactContainer}>
        //         <div className={classes.contactTitleBig}>Блок контактов</div>
        //         <div className={classes.contactTitle}>Email:</div>
        //         <div className={classes.contactText}>mion.courses@gmail.com</div>
        //         <div className={classes.contactTitle}>Телефон</div>
        //         <div className={classes.contactText}>
        //             <a href="tel:+380979151281">+38(097) 91 51 281</a>
        //         </div>
        //         <div className={classes.contactTitle}>Авторские права:</div>
        //         <div className={classes.contactText}>ФОП Василенко Матвей Анатольевич</div>
        //         <div className={classes.contactTitle}>Преподаватели:</div>
        //         <div className={classes.contactText}>Василенко Матвей Анатольевич</div>
        //         {/* <div className={classes.contactText}>Песоцкий Тимур Рамазанович</div> */}
        //     </div>            
        // </div>
        <div className={classes.contactContainer}>
            <div className={classes.contactTitle}>Контакты</div>
            <div className={classes.contactInfoBlock}>
                <FirstBlock classes={classes} DATA={DATA}/>
                <SecondBlock classes={classes} DATA={DATA} />
            </div>
        </div>
    )
}
export default ContactsView