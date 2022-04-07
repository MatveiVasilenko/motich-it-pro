import React, {
    useState
} from 'react'
import { useRouter } from 'next/router';
import { DATA } from '../../../project/data';
import classes from '../../../styles/views/admin/admin-main-view-styles.module.scss'

const AdminView = ({
    courses
}) => {
    const [stateCode, setStateCode] = useState('')
    const router = useRouter()
    const codeFunc = (e) => {
        setStateCode(e.target.value)
    }
    const enterAdminFunc = () => {
        if (stateCode === DATA.password) {
            localStorage.setItem('adminToken', stateCode)
            router.push('/ua/admin/courses')
        }
    }
    return (
        <div>
            <div className={classes.blockEnter__title}>Введите код доступа</div>
            <div className={classes.blockEnter}>
                <div className={classes.blockEnter__input}>
                    <input value={stateCode} onChange={codeFunc}/>
                </div>
                <button className={classes.blockEnter__btn} onClick={enterAdminFunc}>Войти</button>
            </div>
        </div>
    )
}
export default AdminView