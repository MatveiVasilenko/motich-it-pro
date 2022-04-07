import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import SubscriptionCard from './components/SubscriptionCard';
import SliderWeb from '../../../widgets/slider/SliderWeb';
import Site from './../../../layouts/site/Site';
import { site_styles } from '../../../project/styles/style-js-var';
const Subscription = ({
  config,
  styles,
  goApp,
  configAll
}) =>{
    return(
      <Site
        bgImage={site_styles.bgSubscriptionColor}
        light={config.data?.light}
      >

          <div className={styles.subscription}>
          <GlobalTitle 
            title={config.data?.title}
            light={config.data?.light}
            /> 
            <div className={styles.subscription__items}>
              {config.data.subscription.map((card, idx) => (
                  <SubscriptionCard 
                    goApp={goApp} 
                    styles={styles} 
                    card={card} 
                    idx={idx}
                    configAll={configAll}
                    />
              ))}
            </div>          
            </div>
      </Site>
      
    )
}

export default Subscription