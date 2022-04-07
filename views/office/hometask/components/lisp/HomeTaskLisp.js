import {useContext, useEffect, useState} from 'react'
import HomeTaskLispItem from "./HomeTaskLispItem"
import ContextApp from './../../../../../context/App/ContextApp';
import { NET } from './../../../../../network';
import { getData } from './../../../../../common/utils';

const HomeTaskLisp = ({
    hometasks,
    classes
}) => {
    const {stateApp} = useContext(ContextApp)
    const user = stateApp.user
    const [statsData, setStatsData] = useState(false)
    const [warningAuth, setWarningAuth] = useState(false)
    
    useEffect(() => {
        if (user && hometasks.data.data.length) {
            (async () => {
                const data = await getData(
                    `${NET.BACK_URL}/mion/answertask-stats`,
                    'POST',
                    {
                        user_id: user.id,
                        hometasks: JSON.stringify(hometasks.data.data.map(el => el.id))
                    }
                )
                setStatsData(data.data)
            })()
        }
    }, [stateApp])
    return (
        <div>
            <div>
                <div className={[classes.lisp__stats, classes.lisp__stats_mobile].join(' ')}>
                    <div className={classes.lisp__stats__legend}>
                        <div className={[classes.lisp__stats__item, classes.lisp__stats__item_ready].join(' ')}></div>
                        <div className={classes.lisp__stats__legend__item}>Задания на проверке</div>
                    </div>
                    <div className={classes.lisp__stats__legend}>
                        <div className={[classes.lisp__stats__item, classes.lisp__stats__item_check].join(' ')}></div>
                        <div className={classes.lisp__stats__legend__item}>Проверенные задания</div>
                    </div>
                </div>
            </div>
            {warningAuth && <div>Для просмотра ответов на задания необходимо авторизироваться</div>}
            {hometasks.data.data.map((elem, idx) => (
                <HomeTaskLispItem 
                    key={`home${idx}`}
                    classes={classes}
                    elem={elem}
                    statsData={statsData ? statsData.filter(el => el.hometask_id === elem.id)[0] : false}
                    setWarningAuth={setWarningAuth}
                    user={user}
                />
            ))}
        </div>
    )
}
export default HomeTaskLisp