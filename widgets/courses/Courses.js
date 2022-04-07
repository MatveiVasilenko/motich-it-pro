import React, {
    useState, useCallback, useEffect
} from 'react'
import classes from './../../styles/widgets/courses-styles.module.scss'
import stylesOffice from './../../styles/layouts/office-layouts-styles.module.scss'
import Lisp from './../lisp/Lisp';
import ModuleSwitch from './../../views/office/modules/ModuleSwitch';
import { getModuleFunc } from './utils';
import CoursePreview from './CoursePreview';
import { getData } from '../../common/utils';
import { NET } from './../../network';
import Hometask from '../hometask/Hometask';


const Courses = ({
    coursesData,
    handleContent,
    site = false,
    defenseLogin,
    defensePremium,
    premiumHave
}) => {
    const [moduleData, setModuleData] = useState(coursesData?.data ? coursesData?.data[0]?.modules[0] : false)
    const [homeData, setHomeData] = useState(false)
    const getModule = useCallback((module) => {
        getModuleFunc(
            setModuleData,
            module
        )
    }, [])
    useEffect(() => {
        if (moduleData?.hometask_id){
            (async () => {
                const data = await getData(
                    `${NET.BACK_URL}/mion/hometask/${moduleData.hometask_id}`
                )
                setHomeData(data.data)
            })()
        } else {
            setHomeData(false)
        }
    }, [moduleData, setModuleData])
    const [showPreview, setShowPreview] = useState(true)
    return (
        <div className={classes.modules}>
            {site ? <div className={classes.modulesBody}>
            <CoursePreview 
                    classes={classes}
                    stylesOffice={stylesOffice}
                    parent={coursesData?.parent_course}
                    setShowPreview={setShowPreview}
                    moduleData={moduleData}
                    site={site}
                />
            </div> : <div className={classes.modulesBody}>
                {showPreview ? <CoursePreview 
                    classes={classes}
                    stylesOffice={stylesOffice}
                    parent={coursesData?.parent_course}
                    setShowPreview={setShowPreview}
                    moduleData={moduleData}
                    defenseLogin={defenseLogin}
                    premiumHave={premiumHave}
                    defensePremium={defensePremium}
                /> :
                <div>
                    <ModuleSwitch 
                        moduleData={moduleData}
                        setModuleData={setModuleData}
                        classes={classes}
                        />
                    {!site && homeData && <Hometask 
                        homeData={homeData}
                        setHomeData={setHomeData}
                        stylesOffice={stylesOffice}
                    />}
                </div>
                }            
            </div>}
            <Lisp 
                classes={classes}
                coursesData={coursesData}
                handleContent={handleContent}
                getModule={getModule}
                setShowPreview={setShowPreview}
                showPreview={showPreview}
                site={site}
                defenseLogin={defenseLogin}
                premiumHave={premiumHave}
                defensePremium={defensePremium}
            />
        </div>
    )
}
export default Courses