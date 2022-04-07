import { React } from 'react';
import GlobalTitle from '../UI/GlobalTitle/GlobalTitle';
import Answer from './components/Answer';
import Site from './../../../layouts/site/Site';
const Answers = ({
  config,
  styles
}) =>{

    return(
      <Site
        bgImage="#F0F0F0"
      >
        <div className={styles.answers}>
         <GlobalTitle title={config.data.title} colorTitle= 'rgba(0, 43, 45, 0.9)' /> 
          <div className={styles.answers__col}>
              {config.data.answers.map((answer, idx) => (
                <Answer styles={styles} answer={answer} idx={idx}/>
              ))}
        
            </div>
          </div>
      </Site>

        
    )
}

export default Answers