import React, {useMemo, useState} from 'react'
import GridComponent from './../../../widgets/grid/GridComponent'
import {NET} from './../../../network'
import classes from './../../../styles/views/office/hometask-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import { useRouter } from 'next/router';
import { DATA, lang } from './../../../project/data';
import HomeTaskCourse from './../../office/hometask/components/HomeTaskCourse';


const AdminHometaskView = ({
    courses
}) => {
    const langData = {
        title: lang === 'ru' ? 'Задания по курсам' : 'Завдання по курсам'
    }

  
   
    return (
        <div className={stylesOffice.containerAdmin}>
            <div className={stylesOffice.title}>{langData.title}</div>
            <HomeTaskCourse 
                courses={courses}
                classes={classes}
                admin="true"
            />
        </div>
    )
}
export default AdminHometaskView