import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/office/hometask-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import ContextApp from '../../../context/App/ContextApp';
import { lang } from '../../../project/data';
import HomeTaskCourse from './components/HomeTaskCourse';
import HomeTaskLisp from './components/lisp/HomeTaskLisp';
import Back from '../../../widgets/ui/Back';

const HometaskLispView = ({
    hometasks
}) => {
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const payment = stateApp.user &&  stateApp.user.status ? stateApp.user.status : '0'
    
    const langData = {
        title: lang === 'ru' ? 'Список заданий' : 'Список завдань'
    }

    return (
        <div className={stylesOffice.containerOffice}>
            <div className={stylesOffice.title}>{langData.title}</div>
            <Back 
                title="Вернуться в подкурсы"
                onClick={() => router.back()}
            />
            <HomeTaskLisp 
                classes={classes}
                hometasks={hometasks}
            />
        </div>
    )
}
export default HometaskLispView