import React from 'react';
import ReactPlayer from 'react-player';
import Site from './../../../../layouts/site/Site';
import GlobalTitle from './../../UI/GlobalTitle/GlobalTitle';
import Courses from './../../../../widgets/courses/Courses';
import CoursesSlider from './CoursesSlider';
import SubBtn from '../../UI/btns/SubBtn';
import { site_styles } from './../../../../project/styles/style-js-var';

const CoursesSite = ({
  styles,
  config,
  modulesData,
  setModulesData,
  coursesData,
  goApp,
  configAll,
  premium = false
}) =>{
    return(
        <Site
          bgImage={site_styles.bgSiteSubColor}
          smallPadding={true}
          id="courses"
        >
            <GlobalTitle title={config.data?.title} colorTitle='rgba(255, 255, 255, 0,87)'/> 
            <div>
                <CoursesSlider 
                    styles={styles}
                    coursesData={coursesData}
                    modulesData={modulesData}
                    setModulesData={setModulesData}
                />
                <Courses 
                    coursesData={modulesData}
                    site={true}
                    premium={premium}
                />
            </div>
            <div className={styles.courses__btn}>
                <SubBtn 
                    styles={styles}
                    goApp={goApp}
                    configAll={configAll}
                />
            </div>
        </Site>

        
    )
}

export default CoursesSite