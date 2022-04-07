import { React } from 'react';
import { CONFIG } from '../../../../project/config';
import styles from '../../../../styles/views/site/site-view-styles.module.scss';
const Startbtn = ({
    sendData,
    configAll
}) =>{
    return(
        <div className={styles.start__btn}>
            <button onClick={sendData} dangerouslySetInnerHTML={{__html: configAll.btns.data.textBtn}}></button>
        </div>

        
    )
}

export default Startbtn