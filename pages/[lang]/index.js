import React, {
    useContext, useState
  } from 'react'
  import Head from 'next/head'
  import styles from '../../styles/Home.module.css'
  import ContextApp from './../../context/App/ContextApp';
  import { useRouter } from 'next/router';
  import SiteView from './../../views/site/SiteView.js'
import { NET } from './../../network';
import { DATA } from '../../project/data';
import { META } from '../../project/meta';

  const Home = ({
    courses,
    modules,
    company,
    premiums
  }) => {
    const configMain = JSON.parse(company.data.config)
    const [coursesData, setCoursesData] = useState(courses)
    const [modulesData, setModulesData] = useState(modules)
    const [premiumData, setPremiumData] = useState(premiums)
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const goApp = () => {
      router.push('/ru/auth/login')
    }
    return (
      <div className={styles.container}>
        <Head>
          <meta name="keywords" content={META.keywords}/>
          <meta name="description" content={META.content}/>
          <meta name="author" content="MION" />
          <title>{META.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
          
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-751936442"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-751936442');`}}>          
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5YNQQK1SXC"></script>
        <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5YNQQK1SXC');`}}>          
        </script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-207668184-1"></script>
        <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-207668184-1');`}}>
        </script>


        </Head>
        <SiteView 
          coursesData={coursesData}
          setCoursesData={setCoursesData}
          modulesData={modulesData}
          setModulesData={setModulesData}
          configMain={configMain}
          premiumData={premiumData}
          setPremiumData={setPremiumData}
        />
    </div>
    )
  }

export async function getServerSideProps({req, params}) {
  const headers = {
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;charset=UTF-8',
          // Authorization: `Bearer ${userToken}`
      },
      method: 'GET'
  };

  const res = await fetch(
      `${NET.BACK_URL}/courses?id=null&companies_id=${DATA.companies_id}`,
      headers,
  );
  const courses = await res.json()

  const resModules = await fetch(
    `${NET.BACK_URL}/courses/${courses.filter(el => !el.premium)[0]?.id}?modules=1`,
    headers,
  );

  let modules = await resModules.json()

  let premiums = []
  let premium = courses.filter(el => el.premium)
  if (premium.length) {
    const resPremium = await fetch(
      `${NET.BACK_URL}/courses/${premium[0]?.id}?modules=1`,
      headers,
    );
  
    premiums = await resPremium.json()
  }

  const resCompany = await fetch(
    `${NET.BACK_URL}/company/${DATA.companies_id}`,
    headers,
  );
  const company = await resCompany.json()

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
      modules: JSON.parse(JSON.stringify(modules)),
      company: JSON.parse(JSON.stringify(company)),
      premiums: JSON.parse(JSON.stringify(premiums)),
    } // will be passed to the page component as props
  }
}

export default Home
  