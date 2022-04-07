import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Cubic from '../UI/Cubic/Cubic';
import SliderWeb from './../../../widgets/slider/SliderWeb';
import FirstSection from '../FirstSection/firstSection';
import ActivitiCard from './Components/ActivitiCard';
import Site from './../../../layouts/site/Site';
import { site_styles } from '../../../project/styles/style-js-var';



const Activity = ({
  config,
  styles
}) =>{

    return(
      <Site
        light={config.data?.light}
        // bgImage="linear-gradient(180deg, #0E0A24 6.25%, #14121C 50.52%, #00080D 100%)"
        bgImage={site_styles.bgSiteSubColor}
      >
        <div className={styles.activity}>
          <GlobalTitle 
            title={config.data.title}
            light={config.data?.light}
          /> 
          {!config.data?.noCubic && <Cubic options={() => ({colorF: 'rgba(21, 31, 38, 0.5)', colorS:'rgba(4, 5, 19, 0.22)', bottom:'-300px', right:'290px', zIndex: '-1', rotate: '180'})}/>}
          {!config.data?.noCubic && <Cubic options={() => ({colorF: 'rgba(21, 31, 38, 0.5)', colorS:'rgba(4, 5, 19, 0.22)', bottom:'310px', right:'-185px', zIndex: '-10', rotate: '185'})}/>}
          <div className={styles.activityCards}>
            {config.data.activity.map((card, idx) => (
              <ActivitiCard 
                card={card}
                styles={styles}
                idx={idx}
              />
            ))}
          </div>  
        </div>
      </Site>
    )
}

export default Activity