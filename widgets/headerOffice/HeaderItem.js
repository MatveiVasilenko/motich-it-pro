import React from 'react'

const HeaderItem = ({
    classes,
    title,
    value,
    type
}) => {
    return (
        type === 'count' ? 
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{value}</div>
                    <div className={classes.refferalHeadItemText}>{title}</div>
                </div>
            </div>:
        type === 'tarif' ?
            <div className={classes.refferalHeadItemTarif}>
                <div className={classes.headItemLine}>
                    <div className={classes.refferalHeadItemText}>{title.tarif}</div>
                    <div className={classes.refferalHeadItemNumberDate}>{value.tarif}</div>
                </div>
                <div className={classes.headItemLine}>
                    <div className={classes.refferalHeadItemText}>{title.date}</div>
                    <div className={classes.refferalHeadItemNumberTarif}>{value.date}</div>
                </div>
            </div>:
        <></>
    )
}
export default HeaderItem