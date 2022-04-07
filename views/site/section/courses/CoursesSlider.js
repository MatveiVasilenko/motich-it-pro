import React from 'react'
import SliderWeb from '../../../../widgets/slider/SliderWeb';
import CoursesSliderItem from './CoursesSliderItem';
import svgSprite from './../../../../project/svg/svgSprite';
import { site_styles } from './../../../../project/styles/style-js-var';

const CoursesSlider = ({
    coursesData,
    modulesData,
    setModulesData,
    styles
}) => {
    console.log(modulesData)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={styles.slider__arrows__next}
            style={{ ...style, contant: ""}}
            onClick={onClick}
          >
            {svgSprite('ArrowLeftSlider', {
              width: 15
            }, {
              start: site_styles.startGradientSales,
              end: site_styles.endGradientSales
            })}
          </div>
        );
      } 
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={styles.slider__arrows__prev}
            style={{ ...style, contant: ""}}
            onClick={onClick}
          >
            {svgSprite('ArrowLeftSlider', {
              width: 15
            }, {
                start: site_styles.startGradientSales,
                end: site_styles.endGradientSales
            })}
          </div>
        );
      }

    return (
        <div className={styles.courses__slider}>
            <SliderWeb config={{
                className: "center",
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                // slidesPerRow: 1,
                // centerMode: true,
                // centerPadding: "20px",
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
                responsive: [
                    {
                    breakpoint: 1025,
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
                {coursesData && coursesData.filter(el => modulesData?.parent_course?.id != el.id).map((course, idx) => (
                    <CoursesSliderItem 
                        styles={styles} 
                        course={course} 
                        idx={idx}
                        counter={coursesData.length}
                        setModulesData={setModulesData}
                        />
                ))}
            </SliderWeb>
        </div>        
    )
}
export default CoursesSlider