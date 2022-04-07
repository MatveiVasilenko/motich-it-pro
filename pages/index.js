import React, {
  useContext, useEffect
} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContextApp from './../context/App/ContextApp';
import { useRouter } from 'next/router';
import { lang } from './../project/data';

function Home() {
  const {stateApp} = useContext(ContextApp)
  const router = useRouter()
    const goApp = () => {
      router.push('/ru/auth/login')
    }
  return (
    <div className={styles.container}>
      <Head>
        <meta name="keywords" content="MOTICH IT PRO, MOTICH PRODUCTION, обучающая платформа, Front-end, Back-end, React, Laravel"/>
        <meta name="description" content="MOTICH IT PRO - 2000+ студентов, обучаем специалистов c зарплатой от 1000$, MOTICH IT PRO - платформа, которая позволит Вам стать востребованным разработчиком уже через несколько месяцев!"/>
        <meta name="author" content="MION" />
        <title>MOTICH IT PRO | Стань востребованным IT специалистом! | FULLSTACK | FRONTEND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.firstBody}>
            <div className={styles.firstTitle}>Зарплата JS Middle и Full-Stack разработчика - 1000$ и выше</div>
            <div className={styles.firstSubtitle}>Хватит сомневаться - пора изменить свою жизнь!</div>
          </div>
          <div onClick={goApp} className={styles.firstButton}>START</div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps({req, params}) {
  return {
    redirect: {
      destination: `/${lang}`,
      permanent: true,
    },
  }
}

export default Home
