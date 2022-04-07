import React, {
    useState, useContext, useEffect
} from 'react'
import classes from './../../../styles/views/module-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import Back from '../../../widgets/ui/Back';
import Courses from './../../../widgets/courses/Courses';
import ContextApp from '../../../context/App/ContextApp';
import { lang } from '../../../project/data';
import { useRouter } from 'next/router';

const ModulesView = ({
    courses
}) => {
    const {stateApp} = useContext(ContextApp)
    const [activeModule, setActiveModule] = useState(0)
    const [coursesData, setCoursesData] = useState(courses)
    const router = useRouter()
    const handleContent = (elemID, idx) => {
        // setActiveModule(idx)
        // setModuleData(modules[idx])
    }

    const [premiumHave, setPremiumHave] = useState(false)
    const [defensePremium, setDefensePremium] = useState(false)
    const [defenseLogin, setDefenseLogin] = useState(false)
    useEffect(() => {
        if (stateApp.user) {
            setDefenseLogin(true)
            if (coursesData.parent_course.premium) {
                setPremiumHave(true)
                let openCourse = null
                if (stateApp?.user?.premium_id) {
                    openCourse = JSON.parse(stateApp.user.premium_id).filter(courseId => courseId === coursesData.parent_course.id)
                    if (openCourse && openCourse.length) {
                        setDefensePremium(true)
                    }
                }
            }        
        } else {

        }
    }, [])
    
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={classes.modulesHead}>
                <Back 
                    title="Вернуться к курсам"
                    onClick={() => router.push('/ru/office/courses')}
                />
                <div className={classes.modulesHead__Title}></div>
            </div>
            <Courses 
                coursesData={coursesData}
                handleContent={handleContent}
                defenseLogin={defenseLogin}
                defensePremium={defensePremium}
                premiumHave={premiumHave}
            />
        </div>
    )
}
export default ModulesView