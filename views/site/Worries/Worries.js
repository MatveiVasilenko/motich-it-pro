import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import SliderWeb from './../../../widgets/slider/SliderWeb';
import WorriesCard from './Components/WorriesCard';
import Site from './../../../layouts/site/Site';
import bg from './../../../project/image/site/worries_bg.jpg' 
import stolb from './../../../project/image/site/worries/stolb.png'

const Worries = ({
  config,
  styles
}) =>{

    return(
      <Site
        light={true}
        bgImage={`url(${bg})`}
        noPadding={true}
      >
      <div className={styles.worries}>
        <GlobalTitle 
          title={config.data?.title}
          light={true}
          />   
          <div className={styles.worries__items}>
            {config.data.worries.map((card, idx) => (
              <WorriesCard styles={styles} card={card} idx={idx}/>
            ))}  
            <div className={styles.worries__stolb}>
              <img src={stolb}/>
            </div>
          </div> 
          <div className={[styles.worries__line, styles.worries__line_first].join(' ')}></div>     
          <div className={[styles.worries__line, styles.worries__line_second].join(' ')}></div>     
      </div>
      </Site>
        
        
    )
}

export default Worries