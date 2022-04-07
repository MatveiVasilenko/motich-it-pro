import { React } from 'react';
import styles from '../../../../styles/views/site/site-view-styles.module.scss';

const GlobalTitle = ({ 
  title,
  light = false,
  smallTitle = false
}) =>{
    if (!smallTitle) {
      return(
        <div className={styles.global__title}>
          <div className={light ? [styles.global__title__back, styles.global__title__back_light].join(' ') : styles.global__title__back}>{title}</div>
          <div className={light ? [styles.global__title__front, styles.global__title__front_light].join(' ') : styles.global__title__front}>{title}</div>
        </div>
      )
    } else {
      return (
        <div className={styles.global__title}>
          <div className={light ? [styles.global__title__back, styles.global__title__back_light, styles.global__title__back_small].join(' ') : [styles.global__title__back, styles.global__title__back_small].join(' ')}>{title}</div>
          <div className={light ? [styles.global__title__front, styles.global__title__front_light, styles.global__title__front_small].join(' ') : [styles.global__title__front, styles.global__title__front_small].join(' ')}>{title}</div>
        </div>
      )
    }
}

export default GlobalTitle