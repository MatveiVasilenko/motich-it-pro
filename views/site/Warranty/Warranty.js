import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import SliderWeb from '../../../widgets/slider/SliderWeb';
import WarrantyCard from './Components/WarrantyCard';
import bg from './../img/warranty_bg.jpg'
import Site from './../../../layouts/site/Site';
import Cubic from './../UI/Cubic/Cubic';
import SubBtn from '../UI/btns/SubBtn';
import { site_styles } from '../../../project/styles/style-js-var';

const Warranty = ({
  goApp,
  config,
  styles,
  configAll
}) =>{
  
    return(
      <Site 
        bgImage={site_styles.bgWarrantyColor}
        light={true}
      >
        <div className={styles.warranty}>
          <GlobalTitle 
            title={config.data?.title}
            light={true}
            />
          <div className={styles.warranty__flex}> 
          {!config.data?.noCubic && <Cubic options={() => ({colorF: 'rgba(21, 31, 38, 0.5)', colorS:'rgba(4, 5, 19, 0.22)', bottom:'-300px', right:'290px', zIndex: '-1', rotate: '180'})}/>}
          {!config.data?.noCubic && <Cubic animation={true} options={() => ({colorF: 'rgba(21, 31, 38, 0.5)', colorS:'rgba(4, 5, 19, 0.22)', bottom:'310px', right:'-185px', zIndex: '-10', rotate: '185'})}/>}
          </div> 
          <div className={styles.warranty__flex_row}>
              {config.data.warranty.map((card, idx) => (
                <WarrantyCard styles={styles} card={card} idx={idx}/>
              ))}
          </div> 
          {/* <div className={styles.warranty__btn}>
            <SubBtn 
              styles={styles}
              goApp={goApp}
              configAll={configAll}
            />
          </div> */}
            </div>
      </Site>
        
            
    )
}

export default Warranty