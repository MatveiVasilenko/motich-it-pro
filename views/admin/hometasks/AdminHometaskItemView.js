import React, {useMemo, useState} from 'react'
import GridComponent from './../../../widgets/grid/GridComponent'
import {NET} from './../../../network'
import classes from './../../../styles/views/office/hometask-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import { useRouter } from 'next/router';
import { DATA, lang } from './../../../project/data';
import HomeTaskCourse from './../../office/hometask/components/HomeTaskCourse';
import HomeTaskCourseItem from './../../office/hometask/components/HomeTaskCourseItem';
import Back from './../../../widgets/ui/Back';
import HomeTaskSubcourse from './../../office/hometask/components/HomeTaskSubcourse';


const AdminHometaskItemView = ({
    subcourses
}) => {
    const langData = {
        title: lang === 'ru' ? 'Задания по подкурсам' : 'Завдання по подкурсам'
    }

  
   
    return (
        <div className={stylesOffice.containerAdmin}>
            <div className={stylesOffice.title}>{langData.title}</div>
            <div>
                <Back 
                    title="Вернуться к курсам"
                    onClick={() => router.back()}
                />
            </div>
            <HomeTaskSubcourse 
                subcourses={subcourses}
                classes={classes}
                admin="true"
            />
        </div>
    )
}
export default AdminHometaskItemView