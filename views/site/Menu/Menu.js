import { React } from 'react';
const Menu = ({
  styles
}) =>{
    return(
      <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.menu__flex__burger}>
          <div className={styles.menu__flex}> 
            <div className={styles.logo}> <img alt="mion" src='/logo.png'/> </div>
              <div className={styles.nav}>
                <div className={styles.nav__item}><a>Главная</a></div>
                <div className={styles.nav__item}><a>О нас</a></div>
                <div className={styles.nav__item}><a>*Акция</a></div>
                <div className={styles.nav__item}><a>Курсы</a></div>
                <div className={styles.nav__item}><a>Преподаватели</a></div>
                <div className={styles.nav__item}><a>Войти</a></div>
              </div>
            </div>
            <div className={styles.menu__burger}>
                <img alt='image' src='./menu_burger.png'/>
          </div>
        </div>
      </div>
      </div> 
    )
} 

export default Menu