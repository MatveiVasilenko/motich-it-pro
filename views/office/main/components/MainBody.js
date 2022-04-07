import React, {
    useState
} from 'react'
import { DATA } from './../../../../project/data';
import aboutImg from './../../../../project/image/site/about.png'

const MainBody = ({
    classes
}) => {
    const [showWhy, setShowWhy] = useState(false)
    return (
        <div className={classes.mainBody}>
            {/* <div className={classes.mainBodyImage}></div> */}
            <div className={classes.mainBodyContent}>
                <div className={classes.welcome} dangerouslySetInnerHTML={{ __html: DATA.welcome }}></div>
                <div className={classes.mainBody__main}>
                    <div className={classes.mainTextPar}  dangerouslySetInnerHTML={{ __html: DATA.about }}></div>
                    <div className={classes.mainBody__main__image}>
                        <img src={aboutImg} />
                    </div>
                </div>
                <div className={classes.respect}>
                    {DATA.respect}
                </div>
            </div>
        </div>
    )
}
export default MainBody