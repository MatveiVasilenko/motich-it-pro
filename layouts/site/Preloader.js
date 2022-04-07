import React, {
    useState, useEffect
} from 'react'
import logo from './../../project/image/logo.png'
import { lang } from './../../project/data';

const Preloader = ({
    classes
}) => {
    const [opacityPreloader, setOpacityPreloader] = useState(true)
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setOpacityPreloader(false)
            setTimeout(() => {
                setShowPreloader(false)
            }, 500)
        }, 1500)
    }, [])

    return (
        <div>
            {showPreloader && <div className={opacityPreloader ? classes.preloader : [classes.preloader, classes.preloader__opacity].join(' ')}>
                <div>
                    <div className={classes.preloader__logo}>
                        <img src={logo} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: lang ? `Прикоснись к<br /> образованию будущего` : `Доторкнись до<br /> освіти майбутнього`}} className={classes.preloader__text}></div>
                </div>
            </div>}
        </div>
    )
}
export default Preloader