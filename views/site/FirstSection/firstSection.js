import  React  from 'react';
import Site from '../../../layouts/site/Site'
import firstImg from './../../../project/image/bg.png'
import bgVideo from './../../../project/image/site/bg.mp4'

const FirstSection = ({
  goApp,
  config,
  styles,
  configAll
})=>{
    return(
      <Site
        light={true}
        bgImage={`${config.data?.bgImage}`}
        first={true}
        video={config.data.video ? bgVideo : false}
        id="home"
      >
        <div className={styles.first}>
          <div className={styles.first__body}>
            <div className={[styles.first__body__toptitle, 'wow', 'fadeInDown'].join(' ')}>{config.data.topText}</div>
            <div dangerouslySetInnerHTML={{__html: config.data.phrase}} className={[styles.first__body__title, 'wow', 'fadeInDown'].join(' ')}></div>
            <div className={[styles.first__body__subtitle, 'wow', 'fadeInUp'].join(' ')} dangerouslySetInnerHTML={{__html: config.data.giveaway}}></div>
            <div className={[styles.first__image, styles.first__image_mobile].join(' ')}>
              <img src={firstImg} />
            </div>
            <button onClick={goApp} className={[styles.first__body__button, 'wow', 'fadeInUp'].join(' ')} dangerouslySetInnerHTML={{__html: configAll.btns.data.textBtn}}></button>
          </div>
          <div className={styles.first__image}>
            <img src={firstImg} />
          </div>
        </div>        
      </Site>
    )
}

export default FirstSection