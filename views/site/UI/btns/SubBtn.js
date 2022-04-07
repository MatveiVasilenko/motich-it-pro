import React, {
    useState, useEffect
} from 'react'
import { CONFIG } from "../../../../project/config"


const SubBtn = ({
    goApp,
    styles,
    configAll
}) => {
    const [config, setConfig] = useState(false)
    useEffect(() => {
        if (configAll) {
            setConfig(configAll)
        }
    }, [])
    return config && <button 
                onClick={goApp} 
                className={styles.global__btn}
                dangerouslySetInnerHTML={{__html: configAll.btns.data.textBtn}}
                ></button>
}
export default SubBtn