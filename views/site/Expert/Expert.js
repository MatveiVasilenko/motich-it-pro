import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Site from './../../../layouts/site/Site';
import logo from './../../../project/image/logo.png'
import expertImg from './../../../project/image/site/Expert.png'
import doneImg from './../img/Expert/done.png'
import logoImg from './../img/Expert/vahta.png'
import { site_styles } from '../../../project/styles/style-js-var';

const Expert = ({
  styles,
  config
}) =>{
  const {
    name, achievements, quotes, numbers, light
  } = config
  const diplomImg = [
    {
      diplomImg: "/expert/diplom1.png"
    },
    {
      diplomImg: "/expert/diplom2.png"
    },
    {
      diplomImg: "/expert/diplom3.png"
    },
    {
      diplomImg: "/expert/diplom4.png"
    },
    {
      diplomImg: "/expert/diplom5.png"
    },
  ];
  console.log(light)
    return(
      <Site
        bgImage={site_styles.bgExpertColor}
        light={true}
      >
        <div className={styles.expert}>
                <GlobalTitle 
                  title={config.title}
                  light={config.light === false ? config.light : true}
                /> 
                <div className={styles.expert__wrapper}>
                    <div className={styles.expert__col}>
                        <div className={styles.expert__col__first}>{quotes[0]}</div>
                        <div className={styles.expert__col__second}>{quotes[1]}</div>
                    </div>                  
                  <div className={[styles.expert__foto, 'wow', 'fadeInLeft'].join(' ')}><img alt="mion" src={expertImg}/></div>
                  <div className={[styles.expert__col, 'wow', 'fadeInRight'].join(' ')}>
                    <div className={styles.expert__col__name}>{name}</div>
                    {achievements.map((achiev, idx) => (
                        <div key={`achiev${idx}`} className={styles.expert__col__properti}>
                            <div className={styles.expert__col__properti__done}><img alt="mion" src={doneImg}/></div>
                            <div className={styles.expert__col__properti__text}>{achiev.expertTitle}</div>
                        </div>
                    ))}           
                  <div className={styles.expert__col__row}>
                    <div className={styles.expert__col__row__projects}>
                      <div className={styles.expert__col__row__projects}>
                        <div className={styles.expert__col__row__projects__item}>
                          <div className={styles.expert__col__row__projects__item__title}>{numbers[0].number}</div>
                          <div dangerouslySetInnerHTML={{__html: numbers[0].text}} className={styles.expert__col__row__projects__item__text}></div>
                        </div>
                      </div>
                        <div className={styles.expert__col__row__projects}>
                          <div className={styles.expert__col__row__projects__item}>
                            <div className={styles.expert__col__row__projects__item__title}>{numbers[1].number}</div>
                            <div dangerouslySetInnerHTML={{__html: numbers[1].text}} className={styles.expert__col__row__projects__item__text}></div>
                            {numbers[1].image && <div className={styles.expert__col__row__projects__item__flex}>
                              <div className={styles.expert__col__row__projects__item__flex__img}><img alt="mion" src={logoImg}/></div>
                              <div className={styles.expert__col__row__projects__item__flex__img}><img alt="mion" src={logo}/></div>
                            </div>}
                          </div>
                        </div>
                        <div className={styles.expert__col__row__projects__item}>
                          <div className={styles.expert__col__row__projects__item__title}>{numbers[2].number}</div>
                          <div dangerouslySetInnerHTML={{__html: numbers[2].text}} className={styles.expert__col__row__projects__item__text}></div>
                        </div>
                      </div> 
                        {/* <div>
                        <SliderWeb config={{
                    className: "",
                        dots: false,
                        // infinite: true,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        // slidesPerRow: 1,
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
                            // centerMode: true,
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              initialSlide: 2
                            }
                          },
                          {
                            
                            breakpoint: 480,
                            settings: {
                              centerMode: true,
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                        ]
                      }}>
                    {diplomImg.map((card, idx) => (
                      <Diplom styles={styles} card={card} idx={idx}/>
                    ))}

                  </SliderWeb> 
                  </div>    */}
              </div>
                  
              </div>
              </div>

            </div>
      </Site>
        
 

    )
}

export default Expert