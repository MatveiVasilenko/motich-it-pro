import React, {
    useState, useEffect
} from 'react'
import classes from './../../styles/views/auth-view-styles.module.scss'
import Input from './../../widgets/form/components/Input';
import { NET } from './../../network';
import cookie from 'react-cookies';
import { useRouter } from 'next/router';
import useWindowDimensions from './../../global/utils';
import { lang } from './../../project/data';

const AuthLoginView = () => {
    
    const [data, setData] = useState({
        email: '',
        password: '',
        tokenName: 'userToken'
    })
    const [forgetPassword, setForgetPassword] = useState(true)
    const router = useRouter()
    const [errorsData, setErrorsData] = useState({})
    const authData = {
        title: lang === 'ru' ? 'Авторизация' : 'Авторизація',
        enter: lang === 'ru' ? 'Войти' : 'Увійти',
        register: lang === 'ru' ? 'Регистрация' : 'Реєстрація',
        forget: lang === 'ru' ? 'Забыли пароль' : 'Забули пароль',
        forgetText: lang === 'ru' ? 'Для восстановления пароля обратитесь в поддержку по адресу mion.courses@gmail.com' : 'Для відновлення пароля зверніться за адресою mion.courses@gmail.com',
    }
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + this.state.clientToken,
            },
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    cookie.save('userToken', data.token)
                    localStorage.setItem('userToken', data.token)
                    router.push('/ru/office')

                })
            } else if (response.status === 401) {
                response.json().then((errors) => {
                    if (errors.error === 'password') {
                        setErrorsData({
                            ...errorsData,
                            password: 'Пароль введен неверно'
                        })
                    } else if (errors.error === 'no-user') {
                        setErrorsData({
                            ...errorsData,
                            email: 'Пользователь не зарегестрирован'
                        })
                    } else {
                        const keys = Object.keys(errors.error)
                        let acc = {}
                        keys.map((el) => {
                            return acc[el] = errors.error[el]
                        })
                        setErrorsData(acc)
                    }
                })
            }
        })
    }

    return (
        <div className={[classes.wrapper, classes.wrapper__login].join(' ')}>
            <div className={classes.wrapper__window}>
                <div className={classes.title}>{authData.title}</div>
                <Input 
                    attribute="email"
                    data={data}
                    setData={setData}
                    placeholder="e-mail"
                    type="text"
                    svgIcon="AuthEmail"
                    errors={errorsData}
                />
                <Input 
                    attribute="password"
                    data={data}
                    setData={setData}
                    placeholder="Пароль"
                    type="password"
                    svgIcon="AuthPassword"
                    errors={errorsData}
                />
                {forgetPassword ? <div onClick={() => setForgetPassword(false)} className={classes.btnSubSub}>{authData.forget}</div> :
                <div className={classes.forgetMessage}>{authData.forgetText}</div>}
                <div
                    className={classes.btn}
                    onClick={dataSender}
                >{authData.enter}</div>
                <div 
                    className={classes.btnSub}
                    onClick={() => router.push('/ru/auth/register')}
                    >{authData.register}</div>
            </div>
        </div>
    )
}
export default AuthLoginView