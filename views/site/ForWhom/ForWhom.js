import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Cubic from '../UI/Cubic/Cubic';
import ForWhomCard from './components/ForWhomCard';
import SliderWeb from '../../../widgets/slider/SliderWeb';
import Site from './../../../layouts/site/Site';


const ForWhom = ({
  config,
  styles
}) =>{

    return(
      <Site
        bgImage="#F0F0F0"
      >
        <div className={styles.for_whom}>
        <GlobalTitle title = 'Эта платформа для Вас, если  Вы хотите:'/>
        {/* <Cubic options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'-470px', right:'290px', zIndex: '-1', rotate: '180'})}/> */}
        <Cubic options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'200px', right:'-185px', zIndex: '-10', rotate: '185'})}/>
        <div className={styles.for_whom__body}> 
          <SliderWeb config={{
                className: "center",
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    slidesPerRow: 1,
                    centerMode: true,
                    rows: 1,
                    centerPadding: "10px",
                    // nextArrow: <SampleNextArrow />,
                    // prevArrow: <SamplePrevArrow />,
                    responsive: [
                      {
                        breakpoint: 1700,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          rows: 1,
                          infinite: true,
                          dots: true
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          initialSlide: 2,
                          rows: 2,
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          rows: 2,
                          slidesToScroll: 1
                        }
                      }
                    ]
                  }}>
                {config.map((card, idx) => (
                  <ForWhomCard styles={styles} card={card} idx={idx}/>
                ))}
          </SliderWeb>
        </div>

        </div>

      </Site>
    )
}

export default ForWhom