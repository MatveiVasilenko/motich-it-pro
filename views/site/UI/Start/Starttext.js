import { React } from 'react';
import styles from '../../../../styles/views/site/site-view-styles.module.scss';
const StartText = (
    config
) => {
    console.log(config)
    return(
        <div className={styles.start__text} dangerouslySetInnerHTML={{__html: config.config.text}}></div>

        
    )
}

export default StartText