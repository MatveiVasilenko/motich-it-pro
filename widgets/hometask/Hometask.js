import {useState, useContext} from 'react'
import classes from './../../styles/widgets/hometask-styles.module.scss'
import { getData } from '../../common/utils'
import HometaskSwitch from "./HometaskSwitch"
import { NET } from './../../network';
import ContextApp from '../../context/App/ContextApp';
import svgSprite from './../../project/svg/svgSprite';

const Hometask = ({
    homeData,
    setHomeData,
    stylesOffice
}) => {
    const {stateApp} = useContext(ContextApp)
    const [answerData, setAnswerData] = useState(false)
    const loadAnswer = async () => {
        if (answerData.link) {
            const data = await getData(
                `${NET.BACK_URL}/mion/answertask`,
                "POST",
                {
                    hometask_id: homeData.id,
                    user_id: stateApp.user.id,
                    link: answerData.link,
                    comment: 'Test'
                }
            )
            if (data.data === 'Creating') {
                setHomeData('Success')
            }
        }
    }
    return (
        <div>
            {homeData === 'Success' ? <div>
                Ваше задание успешно загружено!
                Можете отследить статус во вкладке "Homework"
            </div> : <div>
                <div className={classes.title}>
                    <div className={classes.title__icon}>
                        {svgSprite('Hometask')}
                    </div>
                    <div className={classes.title__text}>Домашнее задание</div>
                </div>
                <HometaskSwitch 
                    homeData={homeData}
                    answerData={answerData}
                    setAnswerData={setAnswerData}
                    classes={classes}
                    stylesOffice={stylesOffice}
                />
                <div style={{
                    width: 'fit-content'
                }} className={stylesOffice.btn} onClick={loadAnswer}>Загрузить</div>
            </div>}
        </div>
    )
}
export default Hometask