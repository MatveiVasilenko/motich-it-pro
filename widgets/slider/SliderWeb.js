import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/views/site/site-view-styles.module.scss';


const SliderWeb = ({
    config,
    children
}) => {
    const slickConfig = config
    return (
        <div className={styles.slider__wrapper}>
            <Slider
                {...slickConfig}
            >
                {children}
            </Slider>
        </div>
    )
}
export default SliderWeb