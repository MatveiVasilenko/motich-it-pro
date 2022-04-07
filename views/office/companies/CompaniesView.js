import React from 'react'
import { lang } from '../../../project/data'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import classes from './../../../styles/views/office/companies-office-view.module.scss'

const CompaniesView = () => {
    const langData = {
        title: lang === 'ru' ? 'Наши партнеры' : 'Наші партнери',
        textInstagram: lang === 'ru' ? 'Вы можете ознакомится со всеми онлайн-платформами через Instagram MION' : 'Ви можете ознайомитися з усіма онлайн-платформами через Instagram MION',
        textSite: lang === 'ru' ? 'Вы можете ознакомится со всеми онлайн-платформами в нашей образовательно-социальной сети MION' : 'Ви можете ознайомитися з усіма онлайн-платформами у нашої освітньо-соціальної сеті MION',
        linkSite: lang === 'ru' ? 'Перейти на сайт' : 'Перейти на сайт',
        linkInstagram: lang === 'ru' ? 'Перейти в Instagram' : 'Перейти до Instagram',
    }
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={classes.title}>{langData.title}</div>
            <div className={classes.blockCompany}>
                <div className={classes.text}>{langData.textSite}</div>
                <div className={classes.link}>
                    <a href="https://mion.courses">{langData.linkSite}</a>
                </div>
            </div>
            <div className={classes.blockCompany}>
                <div className={classes.text}>{langData.textInstagram}</div>
                <div className={classes.link}>
                    <a href="https://www.instagram.com/mion.social/">{langData.linkInstagram}</a>
                </div>
            </div>
        </div>
    )
}
export default CompaniesView