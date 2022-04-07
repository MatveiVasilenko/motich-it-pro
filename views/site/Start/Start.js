import React, {
  useState
} from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Startinput from '../UI/Start/Startinput';
import Startbtn from '../UI/Start/Startbtn';
import Starttext from '../UI/Start/Starttext';
import Site from './../../../layouts/site/Site';
import { NET } from './../../../network';
import router from 'next/router';
import { site_styles } from '../../../project/styles/style-js-var';
import { CONFIG } from '../../../project/config';
import svgSprite from '../../../project/svg/svgSprite';
import formsImg from './../../../project/image/site/formsImg.svg'

const Start = ({
  styles,
  setUserId,
  setShowPay,
  config,
  configAll
}) =>{
    const [dataItem, setDataItem] = useState({
      phone: '',
      names: ''
    })
    const [errorsData, setErrorsData] = useState({
      phone: [],
      names: []
    })
    const lang = configAll.language
    const sendData = async () => {
      const response = await fetch(`${NET.BACK_URL}/client`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(dataItem)
      })
      const data = await response.json()
      if (response.status === 201) {
        setUserId(data.data.id)
        setShowPay(true)
        document.querySelector('html').classList.add('hiddenBody')
        localStorage.setItem('userData', JSON.stringify(data.data))
      } else {response.status === 401} {
        setErrorsData(data.error)
      }
    }
    const goOnPlatform = () => {
      router.push(`/${lang}/auth/login`)
    }
    return(
        <Site
          bgImage={`url(${formsImg}), ${site_styles.bgStartColor}`}
          light={config.light}
          backgroundPosition={'right center'}
          backgroundSize={'auto'}
          id="start"
        >
          <div className={styles.start}>
             <div className={styles.start__form}>
                <GlobalTitle 
                  title={config.title}
                  light={config.light}
                  smallTitle={true}
                  /> 
                <div className={styles.start__flex}>
                  <Startinput 
                    type="phone" 
                    plhold={'Введите Ваш телефон'}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                    attribute="phone"
                    errors={errorsData}
                    svgIcon={'AuthPhone'}
                    />
                  <Startinput 
                    plhold={config.placeholderName}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                    attribute="names"
                    errors={errorsData}
                    svgIcon={'AuthProfile'}
                    />
                  <div onClick={goOnPlatform} className={styles.start__yetText}>
                    {lang === 'ru' ? 'Я уже являюсь пользователем одной из платформ MION.COURSES' : 'Я вже є користувачем однієї з платформ MION.COURSES'}
                  </div>
                  <Startbtn sendData={sendData} configAll={configAll}/>
                  <Starttext
                    config={config}
                  />
                </div>   
            </div>         
            <div>
              {/* <img src={} /> */}
            </div>         
          </div>
        </Site>

        
    )
}

export default Start