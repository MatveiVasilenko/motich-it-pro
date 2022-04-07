import React from 'react'
import { transformWordCount } from './../../main/utils';
import { useRouter } from 'next/router';

const ProfileButtonEnd = ({
    classes,
    date
}) => {
    const router = useRouter()
    const userDate = new Date(`${date.slice()}`)
    const nowDate = new Date()
    const diff = (userDate.getTime() - nowDate.getTime()) / 1000 / 3600 / 24
    console.log(`${date.substr(6, 4)}-${date.substr(3,2)}-${date.substr(0,2)}`)
    let day = 0
    if (diff < 0) {
        day = 'подписка не активна'
    } else {
        day = `${date.substr(6, 4)}-${date.substr(3,2)}-${date.substr(0,2)}`
    }
    return (
        <div 
            className={classes.profileBtnTarif}
            onClick={() => router.push('/ru/office')}
            >
            <div className={classes.profileBtnTarifUp}>Продлить тариф</div>
            <div className={classes.profileBtnTarifDown}>{day !== 'подписка не активна' ? 'Активна до:' : ''} {day}</div>
        </div>
    )
}
export default ProfileButtonEnd