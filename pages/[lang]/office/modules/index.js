import React, {
    useEffect
} from 'react'
import Office from '../../../../layouts/office/Office'
import { NET } from '../../../../network';
import ModulesView from './../../../../views/office/modules/ModulesView';
import ProtectedOffice from './../../../../global/decorators/ProtectedOffice';
import Head from 'next/head';
import { DATA } from '../../../../project/data';
import { useRouter } from 'next/router';

const OfficeCourses = ({
    courses
}) => {
    const router = useRouter()
    useEffect(() => {
        if (+courses?.parent_course.companies_id != +DATA.companies_id) {
            router.push('/ru/office')
        }
    }, [])
    return (
        <div>
            <Head>
                <title>{courses?.parent_course?.title + '| MOTICH IT PRO | Образовательная платформа для программистов'}</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-S17BH1FN8B"></script>
                <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-S17BH1FN8B');`}}>
                
                </script>

                <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '395984622084052');
                    fbq('track', 'PageView');
                `}}>                
                </script>
                <noscript><img height="1" width="1" style={{display:'none'}}
                src={`https://www.facebook.com/tr?id=395984622084052&ev=PageView&noscript=1`}
                /></noscript>
                
                <meta name="keywords" content="React, Laravel, FullStack, Устроится на работу Front-end"/>
                <meta name="description" content="Курс позволит Вам стать FullStack разработчиком. Вы сможете пройти собеседование на должность Junior Front-end developer. Открыть свой собственный стартап. Зарабатывать от 1000$"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ProtectedOffice>
                <Office 
                    bgLight={true}
                >
                    <ModulesView 
                        courses={courses}
                    />
                </Office>
            </ProtectedOffice>
        </div>
    )
}

export async function getServerSideProps({req, query}) {

    // const {userToken, setUserToken, lang} = useContext(UserContext)
    // const cookies = cookie.parse(req?.headers?.cookie || '');
    // const userToken = cookies?.session_token;

    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`,
        },
        method: 'GET'
    };
    const res = await fetch(
        `${NET.BACK_URL}/courses/${query.course_id}?modules=1`,
        headers,
    );
    const courses = await res.json()
    // const res = await fetch(
    //     `${NET.BACK_URL}/modules/${query.course_id}`,
    //     headers,
    // );
    // const modules = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        courses
      } // will be passed to the page component as props
    }
  }

export default OfficeCourses
