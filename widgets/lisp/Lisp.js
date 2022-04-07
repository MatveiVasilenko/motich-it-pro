import React, {
    useState, useContext
} from 'react'
import svgSprite from '../../project/svg/svgSprite'
import { useRouter } from 'next/router';
import LispItem from './LispItem';
import ContextApp from './../../context/App/ContextApp';
import { DATA } from './../../project/data';

const Lisp = ({
    classes,
    coursesData,
    getModule,
    showPreview,
    setShowPreview,
    site,
    defenseLogin,
    premiumHave,
    defensePremium
}) => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const showWindow = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }    
    const {stateApp} = useContext(ContextApp)
    const companies_id = DATA.companies_id
    let payment = 0
    if (stateApp?.user?.companies_id) {
        const payDefender = JSON.parse(stateApp.user.companies_id).filter(el => +el.id === +companies_id)
        if (payDefender.length) {
            payment = 1
        }    
    }
    return (
        <div className={classes.modulesLisp}>
            <div className={classes.modulesLisp__head}>
                <div>Программа курса</div>
                <div className={classes.modulesLisp__head__title}>{coursesData?.parent_course?.title}</div>
            </div>
            <div className={classes.modulesLisp__body}>
                {coursesData?.data && coursesData.data.map((item, idx) => (
                    <LispItem
                        classes={classes}
                        item={item}
                        idx={idx}
                        payment={payment}
                        getModule={getModule}
                        setShowPreview={setShowPreview}
                        router={router}
                        site={site}
                        defenseLogin={defenseLogin}
                        premiumHave={premiumHave}
                        defensePremium={defensePremium}
                    />
                ))}
            </div>
        </div>        
    )
}
export default Lisp