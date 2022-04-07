import React from 'react'
import svgSprite from '../../../project/svg/svgSprite';
import FooterLink from './../../../widgets/ui/FooterLink';
import logo from './../../../project/image/logo.png'
import Image from 'next/image';
import { CONFIG } from '../../../project/config';
const OfficeFooter = ({
    classes,
    configAll
}) => {
    const lang = configAll.language
    console.log(configAll)
    const footerData = {
        courses: lang === 'ru' ? 'Курсы' : 'Курси',
        profile: lang === 'ru' ? 'Профиль' : 'Профіль',
        politic: lang === 'ru' ? 'Политика конфиденциальности' : 'Політика конфіденційності',
        conf: lang === 'ru' ? 'Договор публичной оферты' : 'Договір публічної оферти',
        pay: lang === 'ru' ? 'Принимаем к оплате' : 'Можна розраховуватися',
    }
    return (
        <div>
            <div className={classes.officeFooterHead}>
                <div className={classes.officeFooterHeadItemLogo}>
                    <img src={logo} />
                </div>
                <div className={classes.officeFooterHeadItem}>
                    <FooterLink 
                        title={footerData.courses}
                        link={`/${lang}/office/courses`}
                    />
                    <FooterLink 
                        title={footerData.profile}
                        link={`/${lang}/office/profile`}
                    />
                </div>
                <div className={classes.officeFooterHeadItem}>
                    <FooterLink 
                        title={footerData.politic}
                        link="https://mion.courses/ru/document/politic"
                        type="export"
                    />
                    <FooterLink 
                        title={footerData.conf}
                        link="https://mion.courses/ru/document/contract"
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
                    <div className={classes.officeFooterBodyPay}>{footerData.pay}</div>
                    <div>
                        <Image 
                            src="/pay.png"
                            width={150}
                            height={65}
                        />
                    </div>
                    <div></div>
                </div>
                <div>2021 © <a className={classes.officeFooterBodyItem__link} href="https://www.instagram.com/mion.courses">MiON</a></div>
            </div>
        </div>
    )
}
export default OfficeFooter