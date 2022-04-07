import React, {
    useContext, useMemo, useCallback, useRef
} from 'react'
import ReactPlayer from 'react-player'
import classes from './../../../../styles/views/module-view-styles.module.scss'
import DescVideo from './video/DescVideo';
import stylesOffice from './../../../../styles/layouts/office-layouts-styles.module.scss'
import BlockVideo from './video/BlockVideo';
import ContextApp from './../../../../context/App/ContextApp';
import { DATA } from '../../../../project/data';
import { useEffect } from 'react';

const Video = ({
    path,
    description,
    title,
    open,
    likes,
    id,
    setModuleData
}) => {
    const {stateApp} = useContext(ContextApp)
    const companies_id = DATA.companies_id
    let payment = 0
    if (stateApp?.user?.companies_id) {
        const payDefender = JSON.parse(stateApp.user.companies_id).filter(el => +el.id === +companies_id)
        if (payDefender.length) {
            payment = 1
        }    
    }
    const refPlayerContainer = React.useRef(null)
    useEffect(() => {
        if (document.querySelector('video') != null) {
            document.querySelector('video').controlsList = 'nodownload'
        }        
    }, [])
    return (
        <div 
            className={classes.wrapper}
        >
            <div ref={refPlayerContainer} className={classes.videoWrapper}>
                <div className={classes.videoWrapper__hide}></div>
                {+payment === 1 || +open ? path.substr(0, 4) === 'http' ? <ReactPlayer 
                    url={`${path}`}
                    controls={true}
                    controlsList="nodownload"
                    width="100%"
                    height="100%"
                    config={{
                        youtube: {
                            playerVars: {
                                loop: 1,
                                modestbranding: 1,
                                showinfo: 0
                            }
                        }
                    }}
                /> : <div className={classes.videoNotTime}>{path}</div> : <BlockVideo    
                classes={classes}                
                stylesOffice={stylesOffice}
            />}         
            </div>
            <DescVideo 
                classes={classes}
                title={title}
                description={description}
                stylesOffice={stylesOffice}
                likes={likes}
                idModule={id}
                setModuleData={setModuleData}
            />

        </div>
    )
}
export default Video