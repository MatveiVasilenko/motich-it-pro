import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Cubic from '../UI/Cubic/Cubic';
import SliderWeb from '../../../widgets/slider/SliderWeb';
import OpportunitiesCard from './components/OpportunitiesCard';
import Site from './../../../layouts/site/Site';
import SubBtn from '../UI/btns/SubBtn';
import { site_styles } from './../../../project/styles/style-js-var';
const Opportunities = ({
  goApp,
  config,
  styles,
  configAll
}) =>{
    return(
      <Site
        bgImage={site_styles.bgOpportunity}
      >
        <div className={styles.opportunities}>
          <GlobalTitle title={config.data?.title}/>
          {/* <Cubic animation={true} options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'-300px', right:'290px', zIndex: '-1', rotate: '0'})}/>
          <Cubic options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'150px', right:'-185px', zIndex: '-10', rotate: '180'})}/>  */}
            {/* <div className={styles.opportunities__row}> */}
            <SliderWeb
                config={{
                  className: "styles.opportunities__row__items",
                  // infinite: true,  
                  centerPadding: "10px",
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  speed: 500,
                  rows: 2,
                  slidesPerRow: 1,
                  responsive: [
                    { 
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                      }
                    }
                  ]
                }}
              >
            {config.data?.opportunities.map((card, idx) => (
                  <OpportunitiesCard styles={styles} card={card} idx={idx}/>
                ))}
            </SliderWeb>
            {/* </div>   */}
            <div className={styles.opportunities__block}>
              <SubBtn 
                styles={styles}
                goApp={goApp}
                configAll={configAll}
              />
            </div>
        </div>
      </Site>
    )
}

export default Opportunities