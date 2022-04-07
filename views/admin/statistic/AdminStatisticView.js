import React from 'react'
import classes from './../../../styles/views/admin/admin-stats-views-styles.module.scss'
import { DATA } from './../../../project/data';

const AdminStatisticView = ({
    stats
}) => {
    return (
        <div>
            <div className={classes.title}>{DATA.name}</div>
            <div className={classes.blockStats}>
                <div className={classes.blockStats__text}>Всего пользователей на портале MION</div>
                <div className={classes.blockStats__number}>{stats?.data?.allUsers}</div>
            </div>
            <div className={classes.blockStats}>
                <div className={classes.blockStats__text}>Пользователей подписанных на {DATA.name}</div>
                <div className={classes.blockStats__number}>{stats?.data?.activeUsers}</div>
            </div>
            <div className={classes.blockStats}>
                <div className={classes.blockStats__text}>Расчетный доход в месяц</div>
                <div className={classes.blockStats__number}>{Math.floor(stats?.data?.activeUsers * DATA.pay * DATA.money)} грн</div>
            </div>
        </div>
    )
}
export default AdminStatisticView