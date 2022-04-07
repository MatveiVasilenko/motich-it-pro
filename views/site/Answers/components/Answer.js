import  React, { useState } from 'react';
import arrow from './../../img/answers/Arrow.png'

const Answer = ({answer, styles, idx}) =>{         
    const [open, setOpen] = useState(false) 
    const hendlerOpen = ()=>{
        setOpen(!open)
    }

            return(
                
            <div style={{margin: ``}} key={{idx}} className={styles.answers__item} onClick={hendlerOpen}>
                <div className={styles.answers__item__row}  >
                    {/* <div className={styles.answers__item__number}>{idx+1}</div> */}
                    <div className={styles.answers__item__arrow} style={{transform: `rotateZ(${open ? 180 : 0}deg)`}}><img alt="" src={arrow}/></div>
                    <div className={styles.answers__item__question}>{answer.question}</div>
                </div>
                {open &&
                <div dangerouslySetInnerHTML={{__html: answer.answer}} className={styles.answers__item__answer}></div>}
            </div>
            )
        } 



export default Answer