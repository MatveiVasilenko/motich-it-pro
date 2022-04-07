import { useContext, useState } from "react"
import ContextApp from "../../../../context/App/ContextApp"
import { lang } from "../../../../project/data";
import svgSprite from './../../../../project/svg/svgSprite';
import { useRouter } from 'next/router';

const RatingInvest = ({
    classes,
    stylesOffice
}) => {
    const {stateApp} = useContext(ContextApp)
    const [showInvest, setShowInvest] = useState(false)
    const {user} = stateApp
    const router = useRouter()
    return (
        <div className={classes.rating__body__invest}>
            <div className={classes.invest}>
                <div className={classes.invest__title}>Ваш рейтинг и дашбоард</div>
                <div className={classes.invest__body}>
                    <div className={classes.invest__body__quote}>
                        <div className={classes.invest__body__quote__text}>"Инвестиции в знания - самая ценная инвестиция. А инвестируя своими знаниями в MION Вы окупаете свои инвестиции в знания."</div>
                        <div className={classes.invest__body__quote__author}>© Матвей Василенко - основатель "MION"</div>
                    </div>
                    {user ? <div>
                        <div className={classes.invest__valut}>
                            <div className={classes.invest__valut__icon_star}>
                                {svgSprite('StarMion', {
                                    fill: "#00799F"
                                })}
                            </div>
                            <div>
                                <div className={classes.invest__valut__title}>Ваш рейтинг</div>
                                <div className={classes.invest__valut__money}>{user?.rating || '0'}</div>
                            </div>
                        </div>
                        <div className={classes.invest__valut}>
                            <div className={classes.invest__valut__icon}>
                                {svgSprite('eMionDark')}
                            </div>
                            <div>
                                <div className={classes.invest__valut__title}>Внутренняя валюта</div>
                                <div className={classes.invest__valut__money}>{user?.emion || '0'} e-Mion</div>
                            </div>
                        </div>
                        <div className={classes.invest__valut}>
                            <div className={classes.invest__valut__icon}>
                                {svgSprite('iMionDark')}
                            </div>
                            <div>
                                <div className={classes.invest__valut__title}>Инвестиционная валюта</div>
                                <div className={classes.invest__valut__money}>{user?.imion || '0'} i-Mion</div>
                            </div>
                        </div>
                    </div> : <div className={classes.invest__noauth}>
                        <div className={classes.invest__noauth__text}>Для получения данных из Вашего профиля Вам необходимо пройти авторизацию или зарегестировать аккаунт</div>
                        <div 
                            onClick={() => {
                                router.push(`/${lang}/auth/login`)
                            }}
                            className={classes.invest__noauth__btn}
                        >Авторизироваться</div>
                    </div>}
                </div>
                {showInvest && <div className={classes.invest__invite}>
                    <div className={classes.invest__invite__text}>
                        Скоро раздел с инвестициями будет доступен
                    </div>
                    <div className={classes.invest__invite__link}>
                        <a href="https://t.me/+jEsC3xmvqhUyZWQy">Перейти на канал MION INVESTING</a>
                    </div>
                </div> }
                <div>
                    <div 
                        onClick={() => {
                            setShowInvest(true)
                        }}
                        className={stylesOffice.ui_btn}
                        >Стать инвестором</div>
                </div>
            </div>
        </div>
    )
}
export default RatingInvest