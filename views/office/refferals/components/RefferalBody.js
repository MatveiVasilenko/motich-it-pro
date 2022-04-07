import React, {
    useState
} from 'react'
import ItemPartner from './ItemPartner'
import svgSprite from './../../../../project/svg/svgSprite';
import useWindowDimensions from './../../../../global/utils';

const RefferalBody = ({
    classes,
    userData,
    user
}) => {
    const [closed, setClosed] = useState(true)
    const { width } = useWindowDimensions();    
    const mobile = width < 768 ? true : false
    const svgStyle = {
        height: mobile ? '22px': '39px'
    }
    if (!userData) {return null}
    return (
        <div className={classes.refferalBodyWrapperInner}>
            <div className={classes.title}>Ваши партнеры:</div>
            <div className={classes.refferalBodyWrapper}>
                <div className={classes.refferalBodyLevel}>
                    <div className={classes.refferalBodyLevelItem}>
                        {svgSprite('Rim3', svgStyle)}
                    </div>
                    <div className={classes.refferalBodyLevelItem}>
                        {svgSprite('Rim2', svgStyle)}
                    </div>
                    <div className={classes.refferalBodyLevelItem}>
                        {svgSprite('Rim1', svgStyle)}
                    </div>
                </div>
                <div className={classes.refferalBodyLineWrapper}>
                    <div className={classes.refferalBodyLine}>
                        {
                            userData && userData['third'] ? userData['third'].map((el, idx) => (
                                <ItemPartner 
                                    classes={classes}
                                    data={el}
                                    key={`userD${idx}`}
                                    closed
                                />
                            )): <div className={classes.refferalBodyLine}></div>
                        }
                    </div>
                    <div className={classes.refferalBodyLine}>
                        {
                            userData && userData['second'] && userData['second'].length ? userData['second'].map((el, idx) => (
                                <ItemPartner 
                                    classes={classes}
                                    data={el}
                                    key={`userD${idx}`}
                                />
                            )): <div className={classes.refferalBodyLine}></div>
                        }
                    </div>
                    <div className={classes.refferalBodyLine}>
                        {
                            userData && userData['first'] === null ? <div className={classes.refferalBodyLine}></div> : userData['first'].map((el, idx) => (
                                <ItemPartner 
                                    classes={classes}
                                    data={el}
                                    key={`userD${idx}`}
                                />
                            ))
                        }
                    </div>
                    <div className={classes.itemUser}>
                        <div className={classes.itemUserWrapper}>
                            <div>{user?.surname} {user?.name}</div>
                            <div>{user?.created_at.substr(0, 10)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RefferalBody