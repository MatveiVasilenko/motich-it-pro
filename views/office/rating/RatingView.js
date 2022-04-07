import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/office/rating-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import ContextApp from '../../../context/App/ContextApp';
import { lang } from '../../../project/data';
import RatingTable from './components/RatingTable';
import RatingInvest from './components/RatingInvest';
import svgSprite from './../../../project/svg/svgSprite';

const RatingView = ({
    users
}) => {
    console.log(users)
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const payment = stateApp.user &&  stateApp.user.status ? stateApp.user.status : '0'
    
    const langData = {
        title: lang === 'ru' ? 'Рейтинг' : 'Рейтинг'
    }

    return (
        <div>
            <div className={stylesOffice.containerOffice}>
                <div className={stylesOffice.title}>{langData.title}</div>

                <div className={classes.rating__body}>
                    <RatingTable 
                        classes={classes}
                        users={users?.data?.users?.data}
                    />
                    <div style={{
                        padding: '12px'
                    }} className={classes.rating__body__grafic}>
                        <div className={classes.grafic}>
                            <div className={classes.grafic__coming}>
                                {svgSprite('ComingSoon')}
                            </div>
                            <div>Скоро тут будет график заработанного рейтинга;)</div>
                        </div>
                    </div>
                    <RatingInvest 
                        classes={classes}
                        stylesOffice={stylesOffice}
                    />
                </div>
            </div>
        </div>
    )
}
export default RatingView