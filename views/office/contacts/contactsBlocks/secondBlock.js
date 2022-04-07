import React from 'react'
import svgSprite from './../../../../project/svg/svgSprite';
const SecondBlock = ({classes, DATA}) => {
      return (
        <div className={classes.contactInfoSecond}>
            <div className={classes.contactInfoTitle}>{DATA.contact.title}</div>
            <div className={classes.contactInfoFop}>{DATA.contact.fop}</div>
            <div className={classes.contactInfoDataBlock}>
                <div className={classes.contactInfoData}>
                    <div className={classes.inputIcon}>
                        {svgSprite('AuthPhone', {
                             className: classes.svgPhone
                        })}
                    </div>
                    <a href={`tel:${DATA.contact.phoneReal}`} >{DATA.contact.phone}</a>
                </div>
                <div className={classes.contactInfoData}>
                    <div className={classes.inputIcon}>
                        {svgSprite('AuthEmail', {
                            className: classes.svgEmail
                        })}
                    </div>
                    <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
                </div>  
            </div>
        </div>
    )
}

export default SecondBlock