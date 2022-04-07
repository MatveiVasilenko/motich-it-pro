import React from 'react'
import { DATA, lang } from './../../../../project/data';
import MainTarifCard from './MainTarifCard';
import svgSprite from './../../../../project/svg/svgSprite';
import { useRouter } from 'next/router';

const MainTarif = ({
    classes,
    userId,
    site = false
}) => {
    const langData = {
        congrutulation: lang === 'ru' ? `<b>Поздравляем!</b> Вы в шаге от того, чтобы начать обучение и получить <b>качественные и структурированные знания!</b>` : `<b>Вітаємо!</b> Ви за крок від того, щоб почати навчання та отримати <b>якісні та структуровані знання!</b>`,
        text: lang === 'ru' ? `Осталось выбрать максимально комфортный тариф для Вас.` : `Залишилось обрати максимально комфортний тариф для Вас.`,
        noPay: lang === 'ru' ? `Хочу посмотреть платформу до оплаты` : `Хочу подивитись платформу до оплати`
    }
    const standard = DATA.prices.standard
    const premium = DATA.prices.premium

    const router = useRouter()
    const noPayFunc = () => {
        document.querySelector('html').classList.remove('hiddenBody')
        router.push(`/${lang}/auth/register`)
    }
    return (
        <div>
            <div className={classes.tarifWrapper}>
                <div className={classes.tarifWrapperInner}>
                    <div className={classes.tarif}>
                        <div className={classes.tarifTitle}>{standard.name} </div>
                        <div className={classes.tarifTitleUp}>{standard.name}</div>
                    </div>
                    {site && <div className={classes.tarifSiteBlock}>
                            <div dangerouslySetInnerHTML={{__html: langData.congrutulation}} className={classes.tarifSiteBlock__title}>
                                
                            </div>
                            <div>{langData.text}</div>
                        </div>}
                    <div className={classes.tarifWrapperBody}>
                        {
                            standard.periods.map((el, idx) => (
                                <MainTarifCard 
                                    premiun={false}
                                    data={el}
                                    classes={classes}
                                    idx={idx}
                                    userId={userId}
                                    site={site}
                                    />
                            ))
                        }
                    </div>
                </div>
            </div>
            {site && <div onClick={noPayFunc} className={classes.tarifBtnNot}>{langData.noPay}</div>}
        </div>
    )
}
export default MainTarif