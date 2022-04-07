import React, {
    useMemo, useState, useEffect
} from 'react'
import FirstSection from './FirstSection/firstSection';
import AboutUs from './AboutUs/AboutUs';
import ForWhom from './ForWhom/ForWhom';
import Opportunities from './Opportunities/Opportunities';
import Warranty from './Warranty/Warranty';
import Giveway from './Giveway/Giveway';
import Worries from './Worries/Worries';
import Start from './Start/Start';
import Play from './Play/Play';
import Phone from './Phone/Phone';
import { useRouter } from 'next/router';
import Activity from './Activity/Activity';
import Subscription from './Subscription/Subscription';
import Answers from './Answers/Answers';
import Reviews from './reviews/Reviews';
import Expert from './Expert/Expert';
import styles from './../../styles/views/site/site-view-styles.module.scss'
import stylesOffice from './../../styles/layouts/office-layouts-styles.module.scss'
import OfficeFooter from '../../layouts/office/components/OfficeFooter';
import Site from './../../layouts/site/Site';
import Menu from './../../layouts/office/components/Menu';
import logo from './../../project/image/logo.png'
import { getConfigMenu } from './options/initData';
import VideoPlatfrom from './section/videoPlatform/VideoPlatfrom';
import CoursesSite from './section/courses/CoursesSite';
import ModalPay from './Start/components/ModalPay';
import { configData } from './../../project/config';
import ModalGift from './section/modalGift/ModalGift';
import ModalGiftThank from './section/modalGift/ModalGiftThank';
import { site_styles } from '../../project/styles/style-js-var';
import Sales from './section/sales/Sales';
import SalesItem from './section/sales/SalesItem';

const SiteView = ({
  coursesData,
  setCoursesData,
  modulesData,
  setModulesData,
  configMain,
  premiumData,
  setPremiumData
}) =>{
    const router = useRouter()
    const goApp = () => {
        router.push('/ru#start')
      }    
    const config = useMemo(() => configData(configMain), [])
    const lang = config.language
    const menu = useMemo(() => getConfigMenu(lang))
    const [showPay, setShowPay] = useState(false)
    const [userId, setUserId] = useState(false)
    const [showModalGift, setShowModalGift] = useState(false)
    const [showModalGiftThank, setShowModalGiftThank] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setShowModalGift(true)
      }, 10000)
    }, [])
    return(
      <>
        <div className={stylesOffice.officeWrapperHeader}>
            <script dangerouslySetInnerHTML={{__html: `
            fbq('track', 'ViewContent');
            `}}>
            </script>
            <div className={stylesOffice.officeLogo}>
                <img src={logo} />
            </div>
            <div>
                <Menu 
                    menu={menu}
                    site={true}
                />
            </div>
        </div> 
        {config.videoPlatform.have && <Play styles={styles}/>}
        <Phone styles={styles}/>
        <FirstSection styles={styles} goApp={goApp} config={config.first} configAll={config}/>
        <AboutUs styles={styles} config={config.aboutUs}/>
        {/* <Giveway goApp={goApp}/> */}
        <Activity styles={styles} config={config.Activity}/>
        <Worries styles={styles} config={config.Worries}/>
        {/* <ForWhom styles={styles} config={config.ForWhom}/> */}
        <Opportunities styles={styles} goApp={goApp}  config={config.Opportunities} configAll={config}/>
        {config?.premiumCourses?.have && <CoursesSite 
          styles={styles} 
          modulesData={premiumData} 
          setModulesData={setPremiumData}
          goApp={goApp}
          coursesData={coursesData.filter(el => el.premium)}
          setCoursesData={setCoursesData}
          config={config.premiumCourses}
          configAll={config}
          premium={true}
          />}
        <CoursesSite 
          styles={styles} 
          modulesData={modulesData} 
          setModulesData={setModulesData}
          goApp={goApp}
          coursesData={coursesData.filter(el => !el.premium)}
          setCoursesData={setCoursesData}
          config={config.courses}
          configAll={config}
          />
        {config.videoPlatform.have && <VideoPlatfrom styles={styles} config={config.videoPlatform}/>}
        <Warranty styles={styles} config={config.Warranty} goApp={goApp} configAll={config}/>
        <Subscription styles={styles} config={config.Subscription} goApp={goApp} configAll={config}/>
        <Expert styles={styles} config={config.expert.data}/>
        <Reviews styles={styles} config={config.reviews.data}/>
        <Answers styles={styles} config={config.Answers}/>
        <Start 
            styles={styles} 
            setUserId={setUserId}
            setShowPay={setShowPay}
            config={config.start.data}
            configAll={config}
          />
        <Site
          bgImage={site_styles.bgFooterColor}
          smallPadding={true}
          id="footer"
        >
        <Sales 
          styles={styles}
        />
        <SalesItem 
          styles={styles}
          configAll={config}
        />
          <OfficeFooter classes={stylesOffice} configAll={config}/>
        </Site>
        {showPay && <ModalPay 
                userId={userId}
                setUserId={setUserId}
                setShowPay={setShowPay}
            />}
        {/* {showModalGift && <ModalGift 
          styles={styles}
          config={CONFIG.gift}
          showModalGift={showModalGift}
          setShowModalGift={setShowModalGift}
          setShowModalGiftThank={setShowModalGiftThank}
        />}
        {(showModalGift || showModalGiftThank) && <div onClick={() => {
              setShowModalGift(false)
            }} className={styles.modalBackground}></div>}
        {showModalGiftThank && <ModalGiftThank 
          styles={styles}
          setShowModalGiftThank={setShowModalGiftThank}
        />} */}
      </>  
      
    )
}

export default SiteView;