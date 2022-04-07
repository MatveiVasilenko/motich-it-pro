import {useState, useEffect, useContext} from 'react'
import classes from './../../../styles/views/office/answers-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import { getData } from "../../../common/utils"
import { NET } from './../../../network';
import { useRouter } from 'next/router';
import ContextApp from './../../../context/App/ContextApp';
import { lang } from '../../../project/data';
import AnswersLisp from './components/AnswersLisp';
import Back from '../../../widgets/ui/Back';

const AnswersView = () => {
    const langData = {
        title: lang === 'ru' ? 'Ответы на задания' : 'Відповіді на завдання'
    }
    const [answersData, setAnswersData] = useState(false)
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        (async () => {
            const data = await getData(
                `${NET.BACK_URL}/mion/answertask/${id}?user_id=${stateApp.user?.id}`
            )
            if (data) {
                setAnswersData(data.data)
            }
        })()
    }, [])
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={stylesOffice.title}>{langData.title}</div>
            <Back 
                title="Вернуться в задания"
                onClick={() => router.back()}
            />
            {answersData ? <div>
                <AnswersLisp 
                    classes={classes}
                    answersData={answersData}
                />
            </div> : <div>Загрузка...</div>}
        </div>
    )
}
export default AnswersView