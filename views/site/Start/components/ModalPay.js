import React from 'react'
import classes from './../../../../styles/views/main-view-styles.module.scss'
import MainTarif from './../../../office/main/components/MainTarif';

const ModalPay = ({
    userId
}) => {
    return (
        <div className={classes.modalPay}>
            <MainTarif 
                classes={classes}
                userId={userId}
                site={true}
            />
        </div>
    )
}
export default ModalPay