import React, {
    useState, useEffect
} from 'react';
import styles from '../../../../styles/views/site/site-view-styles.module.scss';
const Cubic = ({
    options,
    animation = false
}) =>{
    const [config, setConfig] = useState(false)
    useEffect(() => {
        setConfig(options)
    }, [])
    return(
          config ? <div style={{background:`linear-gradient(180deg, ${config.colorF} 0%, ${config.colorS} 100%)`, bottom: `${config.bottom}`, right: `${config.right}`, zIndex:`${config.zIndex}`, ...(animation ? {} : {transform: `rotate(${config.rotate}deg)`})  }} 
          className={animation ? [styles.cubic, styles.cubic_animate].join(' ') : styles.cubic}>
            
          </div> : <></>
    )
}

export default Cubic