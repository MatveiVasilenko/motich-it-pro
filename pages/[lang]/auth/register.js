import React from 'react' 
import Auth from './../../../layouts/auth/Auth';
import AuthRegisterView from './../../../views/auth/AuthRegisterView';
import Head from 'next/head';

const Login = () => {
    return (
        <div>
            <Head>
                {/* <script dangerouslySetInnerHTML={{__html: `gtag('event', 'conversion', {'send_to': 'AW-751936442/ggiFCKDp3PYCELrHxuYC'});`}}>
                </script> */}
            </Head>
            <Auth>
                <AuthRegisterView />
            </Auth>
        </div>
    )
}
export default Login