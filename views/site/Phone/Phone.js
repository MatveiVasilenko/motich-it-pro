import { React } from 'react';
import { useRouter } from 'next/router';
import icon from './../img/phone.png'
const Phone = ({
  styles
}) =>{
  const router = useRouter()
    return(
      <div onClick={() => {
        router.push('tel:+380979151281')
      }} className={styles.phone}>
        <img alt="play" src={icon}/>
      </div>
         
    )
}

export default Phone