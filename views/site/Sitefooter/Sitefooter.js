import { React } from 'react';
const SiteFooter = ({
  styles
}) =>{
    return(
    <div className={styles.sitefooter}>
      <div className={styles.container}>
        <div className={styles.sitefooter__flex}>
        <div className={styles.sitefooter__flex__col}>
            <div className={styles.sitefooter__flex__col__title}>
              <div className={styles.sitefooter__flex__col__title}><a><img className={styles.about__cup} alt="mion" src='/img/logo_footer.png'/></a></div>
              <div className={styles.sitefooter__flex__col__item}><a>Принимаем к оплате</a></div>
              <div className={styles.sitefooter__flex__col__item}><a><img className={styles.about__cup} alt="mion" src='/img/pay.png'/></a></div>
            </div>
          </div>
          
          <div className={styles.sitefooter__flex__col}>
            <div className={styles.sitefooter__flex__col__item}><a>Курсы</a></div>
            <div className={styles.sitefooter__flex__col__item}><a>Тарифы</a></div>
            <div className={styles.sitefooter__flex__col__item}><a>*Акция</a></div>
          </div>

          
          <div className={styles.sitefooter__flex__col}>
            <div className={styles.sitefooter__flex__col__item}><a>Главная</a></div>
            <div className={styles.sitefooter__flex__col__item}><a>Политика конфиденциальности</a></div>
            <div className={styles.sitefooter__flex__col__item}><a>Договор публичной оферты</a></div>
          </div>

          
          <div className={styles.sitefooter__flex__col}>
            <div className={styles.sitefooter__flex__col__item}><a>0979151281</a></div>
            <div className={styles.sitefooter__flex__col__item}><a>mion.courses@gmail.com</a></div>
            <div className={styles.sitefooter__flex__col__item}><a></a></div>
          </div>
        </div>
      </div> 
      </div>  
    )
}

export default SiteFooter