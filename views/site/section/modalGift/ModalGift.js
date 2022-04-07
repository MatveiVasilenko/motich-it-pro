import {useState} from 'react'
import svgSprite from './../../../../project/svg/svgSprite';
import { site_styles } from './../../../../project/styles/style-js-var';
import Startinput from '../../UI/Start/Startinput';
import { NET } from '../../../../network';

const ModalGift = ({
    config,
    styles,
    setShowModalGift,
    showModalGift,
    setShowModalGiftThank
}) => {
    const [dataItem, setDataItem] = useState({
        names: 'Gift'
    })
    const [errorsData, setErrorsData] = useState({})
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
          setShowModalGift(false)
          setShowModalGiftThank(true)
        } else {response.status === 401} {
          setErrorsData(data.error)
        }
      }
    return (
        <div className={styles.modalGift}>
            <div className={styles.modalGift__title}>{config?.data.title}</div>
            <div className={styles.modalGift__text}>{config?.data.text}</div>
            <div className={styles.modalGift__giveaway}>{config?.data.giveaway}</div>
            <div className={styles.modalGift__subscribe__title}>Напишите свой телефон и мы вышлем Вам чеклист в Telegram или Viber</div>
            <div 
                className={styles.modalGift__subscribe}
                >
                <Startinput 
                    type="phone" 
                    plhold={'Введите Ваш телефон'}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                    attribute="phone"
                    errors={errorsData}
                />
                <div onClick={sendData}>
                    
                    {svgSprite('Telegram', {
                        style: {
                            width: '25px',
                            fill: site_styles.mainSiteColor
                        }
                    })}
                </div>
            </div>
            <div onClick={() => setShowModalGift(false)} className={styles.modalGift__close}>x</div>
        </div>
    )
}
export default ModalGift