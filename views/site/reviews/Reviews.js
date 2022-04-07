import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Cubic from '../UI/Cubic/Cubic';
import SliderWeb from '../../../widgets/slider/SliderWeb';
import ReviewsCard from './Components/ReviewsCard';
import Site from './../../../layouts/site/Site';
const Reviews = ({
  styles,
  config
}) =>{
  const revImg = config?.type === 'video' ? config.data : config.data
    return(
      <Site
        bgImage="#F0F0F0"
      >
        <div className={styles.reviews}>
          <Cubic animation={true} options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'-300px', right:'290px', zIndex: '-1', rotate: '180'})}/>
          <Cubic animation={true} options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'310px', right:'-185px', zIndex: '-10', rotate: '185'})}/>
          <div className={styles.container}>
            <GlobalTitle title={config.title} colorTitle= 'rgba(255, 255, 255, 0,87)'/>
            <SliderWeb config={{
            className: "",
                dots: true,
                // infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                // slidesPerRow: 1,
                // centerMode: true,
                // centerPadding: "20px",
                // nextArrow: <SampleNextArrow />,
                // prevArrow: <SamplePrevArrow />,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              }}>
            {revImg.map((card, idx) => (
              <ReviewsCard 
                styles={styles} 
                card={card} 
                idx={idx}
                config={config}
                />
            ))}

          </SliderWeb>  
           
          </div>
        </div>
      </Site>    
    )
}

export default Reviews