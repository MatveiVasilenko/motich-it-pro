import React from 'react' 
import AuthLoginView from './../../../views/auth/AuthLoginView';
import Auth from './../../../layouts/auth/Auth';

const Login = () => {
    return (
        <Auth
            auth={true}
        >
            <AuthLoginView />
        </Auth>
    )
}
export default Login