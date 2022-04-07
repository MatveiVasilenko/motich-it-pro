import React, {
    useContext, useState, useEffect, useCallback
} from 'react'
import ContextApp from './../../context/App/ContextApp';
import { NET } from './../../network';
import cookie from 'react-cookies';
import { useRouter } from 'next/router';
import { createToken, deleteToken } from './../../context/App/actions';

const ProtectedOffice = ({
    children
}) => {
    const {stateApp, dispatchApp} = useContext(ContextApp)
    const router = useRouter()
    const userToken = cookie.load('userToken')
    const [user, setUser] = useState(null)
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/profile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {    
                    dispatchApp(createToken(data.user))
                })
            } else if (response.status === 401) {
                dispatchApp(deleteToken())
                localStorage.removeItem('userToken')
                cookie.remove('userToken', {path: '/'})
            }
        })
    }
    useEffect(() => {
        dataSender()
    }, [userToken])
    
    return (
        <>
            {children}
        </>
    )
}
export default ProtectedOffice