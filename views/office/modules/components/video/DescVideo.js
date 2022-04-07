import React, {
    useCallback
} from 'react'
// import { CONFIG } from '../../../../../project/config'
import HeadDescVideo from './HeadDescVideo'
import { configData } from './../../../../../project/config';

const DescVideo = ({
    classes,
    title,
    stylesOffice,
    description,
    likes,
    idModule,
    setModuleData
}) => {
    const tags = [
        'React',
        'Laravel',
        'Fullstack'
    ]
    const config = useCallback(() => configData(), [])
    return (
        <div>
            <div className={classes.desc__tag}>
                {config?.hashtag && config.hashtag.map((tag) => (
                    <div className={classes.desc__tag__item}>{tag}</div>
                ))}
            </div>
            <div className={classes.desc__title}>{title}</div>
            <HeadDescVideo 
                classes={classes}
                stylesOffice={stylesOffice}
                likes={likes}
                idModule={idModule}
                setModuleData={setModuleData}
            />
            <div dangerouslySetInnerHTML={{__html: description}} className={classes.desc__desc}></div>
        </div>
    )
}
export default DescVideo