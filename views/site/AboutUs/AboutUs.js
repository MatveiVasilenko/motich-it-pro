import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Cubic from '../UI/Cubic/Cubic';
import Site from './../../../layouts/site/Site'
import about from './../../../project/image/site/about.png'
import { site_styles } from '../../../project/styles/style-js-var';

const AboutUs = ({
  config,
  styles
}) =>{
    return(
      <Site
        bgImage={site_styles.bgSiteSubColor}
        id="about"
      >
        <div className={styles.about_us}>
          <Cubic animation={true} options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'-300px', right:'0', zIndex: '-1'})}/>
          <Cubic animation={true} options={() => ({colorF: 'rgba(255, 255, 255, 0.5063)', colorS:'rgba(167, 167, 167, 0.305)', bottom:'310px', right:'-185px', zIndex: '-10'})}/>
          <div className={styles.container}>
          <GlobalTitle title={config.data?.title} colorTitle= 'rgba(255, 255, 255, 0,87)'/> 
            <div className={styles.about_us__platform}>
              <div className={styles.about_us__platform__wrapper}>
                <div className={[styles.about_us__platform__blockImage, 'wow', 'fadeInRight'].join(' ')}>
                  <img src={about} />
                </div>
                <div className={styles.about_us__platform__numbers}>
                  {config.data.numbers.map((num, idx) => (
                    <div className={[styles.about_us__platform__numbers__item, 'wow', 'fadeInUp'].join(' ')} key={`num${idx}`}>
                      <div className={styles.about_us__platform__numbers__item__number}>{num.number}</div>
                      <div dangerouslySetInnerHTML={{__html: num.text}}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.about_us__platform__wrapper}>
                <div className={styles.about_us__platform__wrapper__blockText}>
                  <div className={styles.global__subtitle}>{config.data.subtitle}</div>
                  <div dangerouslySetInnerHTML={{__html: config.data.text}}></div>
                </div>
                <div className={styles.about_us__platform__wrapper__blockText}>
                  <div className={styles.global__subtitle}>{config.data.info[0].title}</div>
                  <div dangerouslySetInnerHTML={{__html: config.data.info[0].text}}></div>
                </div>
              </div>
            </div> 

          {/* <div className={styles.about_us__info}>
            <div className={[styles.about_us__info_item, styles.about_us__info_item_right].join(' ')}>
              <div className={styles.global__subtitle}>{config.data.info[0].title}</div>
              <div className={styles.about_us__cups}><img className={styles.about_us__cup} alt="mion" src='/img/cup.png'/><img className={styles.about_us__cup} alt="mion" src='/img/cup.png'/><img className={styles.about_us__cup} alt="mion" src='/img/cup.png'/></div>
              <div dangerouslySetInnerHTML={{__html: config.data.info[0].text}}></div>
            </div>
            <div className={[styles.about_us__info_item, styles.about_us__info_item_left].join(' ')}>
              <div className={styles.global__subtitle}>{config.data.info[1].title}</div>
              <div dangerouslySetInnerHTML={{__html: config.data.info[1].text}}></div>
            </div>
          </div> */}
          </div>
        </div>
      </Site>       
    )
}

export default AboutUs