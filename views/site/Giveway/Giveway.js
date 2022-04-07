import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
const Giveway = ({goApp, styles}) =>{
    return(
        <div className={styles.giveway}>
        <div className={styles.container}>
          <div className={styles.giveway__flex}>
        <GlobalTitle title = 'Giveway' colorTitle= '#fff'/> 
          <div className={styles.giveway__text}>  Успейте принять участие в <span className={styles.giveway__green}>масштабном Гиве</span> среди подписчиков на <a>образовательную платформу</a>, <a>YouTube</a>, <a>инстаграм</a> и <a>телеграм</a> канал Motich Production, где будет <span className={styles.giveway__yellow}>10</span> призовых мест с призовым фондом - <span className={styles.giveway__yellow}>10 000</span> грн, который разыграется в прямом эфире в инстаграме <span className={styles.giveway__yellow}>02.07.2021</span> в <span className={styles.giveway__yellow}>17:00</span> по Киеву.  </div>
            <div className={styles.giveway__firstrow}>
            <div className={styles.giveway__subtitle}>Призы:</div>
            <div className={styles.giveway__row}>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/1.png'/></div>
                <div className={styles.giveway__row__item__text}>3 000 грн + трехмесячная подписка на платформу + скидка 20% на подписку на платформу одного из наших партнеров на выбор</div>
              </div>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/2.png'/></div>
                <div className={styles.giveway__row__item__text}>1 000 грн + трехмесячная подписка на платформу + скидка 10% на подписку на платформу одного из наших партнеров на выбор</div>
              </div>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/3.png'/></div>
                <div className={styles.giveway__row__item__text}>1 000 грн + подписка на платформу на 3 месяца</div>
              </div>
            </div>
            </div>

            <div className={styles.giveway__row}>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/45.png'/></div>
                <div className={styles.giveway__row__item__text}>1 000 грн + подписка на платформу на 1 месяц</div>
              </div>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/67.png'/></div>
                <div className={styles.giveway__row__item__text}>Подписка на платформу 
на 6 месяцев</div>
              </div>
            </div>

            <div className={styles.giveway__row}>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/89.png'/></div>
                <div className={styles.giveway__row__item__text}>Подписка на платформу 
на 3 месяца</div>
              </div>
              <div className={styles.giveway__row__item}>
                <div className={styles.giveway__row__item__number}><img alt="mion" src='/gift/10.png'/></div>
                <div className={styles.giveway__row__item__text}>Подписка на платформу 
на 1 месяц</div>
              </div>
            </div>
          </div>
          <div className={styles.btn__flex}>
          <button onClick={goApp} className={styles.global__btn}><div>Начать обучение<br/> <span>и участвовать в Giveaway</span> </div></button>
          </div>
          </div>
        </div>

        
    )
}

export default Giveway