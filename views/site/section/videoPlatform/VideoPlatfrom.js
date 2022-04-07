import React from 'react';
import ReactPlayer from 'react-player';
import Site from './../../../../layouts/site/Site';
import GlobalTitle from './../../UI/GlobalTitle/GlobalTitle';

const VideoPlatfrom = ({
  styles,
  config
}) =>{
    return(
        <Site
          bgImage="#f0f0f0"
          smallPadding={true}
          id="platform"
        >
             <GlobalTitle title={config.data?.title} colorTitle='rgba(255, 255, 255, 0,87)'/> 
             <div className={styles.videoPlatform}>
                <ReactPlayer 
                        url={`${config?.data?.url}`}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
             </div>
        </Site>

        
    )
}

export default VideoPlatfrom