import React from 'react'
import svgSprite from '../../../project/svg/svgSprite';
import FooterLink from './../../../widgets/ui/FooterLink';
import Image from 'next/image'
const OfficeFooter = ({
    classes
}) => {
    return (
        <div>
            <div className={classes.officeFooterHead}>
                <div className={classes.officeFooterHeadItemLogo}>
                    {svgSprite('Logo', {
                        width: '100px',
                        // height: '102px',
                        fill: 'white',
                        // stroke: 'white'
                    })}
                </div>
                <div className={classes.officeFooterHeadItem}>
                    <FooterLink 
                        title="Курсы"
                        link="/ru/office/courses"
                    />
                    <FooterLink 
                        title="Профиль"
                        link="/ru/office/profile"
                    />
                </div>
                <div className={classes.officeFooterHeadItem}>
                    <FooterLink 
                        title="Политика конфиденциальности"
                        link="https://mion.courses/politic"
                        type="export"
                    />
                    <FooterLink 
                        title="Договор публичной оферты"
                        link="https://mion.courses/contract"
                        type="export"
                    />
                </div>
                <div className={classes.officeFooterHeadItem}>
                    <div className={classes.officeFooterHeadFlex}>
                        <div className={classes.officeFooterHeadItemSvg}>
                            {svgSprite('AuthPhone', {
                                width: '32px',
                                height: '32px',
                                fill: 'white'
                            })}
                        </div>
                        <FooterLink 
                            title="+38(097)91 51 281"
                            link="tel:+380979151281"
                            type="export"
                        />
                    </div>
                    <div className={classes.officeFooterHeadFlex}>
                        <div className={classes.officeFooterHeadItemSvg}>
                            {svgSprite('Email', {
                                width: '32px',
                                height: '32px',
                                fill: 'transparent',
                                stroke: 'white'
                            })}
                        </div>
                        <FooterLink 
                            title="mion.courses@gmail.com"
                            link="mailto:mion.courses@gmail.com"
                            type="export"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.officeFooterBody}>
                <div className={classes.officeFooterBodyItem}>
                    <div className={classes.officeFooterBodyPay}>Принимаем к оплате</div>
                    <div>
                        <Image 
                            src="/pay.png"
                            width={150}
                            height={65}
                        />
                    </div>
                    <div></div>
                </div>
                <div>2021 © MiON </div>
            </div>
        </div>
    )
}
export default OfficeFooter