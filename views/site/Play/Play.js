import { React } from 'react';
import { useRouter } from 'next/router';
import icon from './../img/Play.png'
const Play = ({
  styles
}) =>{
    const router = useRouter()
    return(
      <div onClick={() => {
        router.push('/ru#platform')
      }} className={styles.play}>
        <img alt="play" src={icon}/>
      </div> 
    )
}

export default Play