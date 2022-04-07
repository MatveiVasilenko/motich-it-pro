import React, {useState} from 'react'
import ProfileLispItem from './ProfileLispItem'
import svgSprite from '../../../../project/svg/svgSprite'

const ProfileLisp = ({
    classes,
    user
}) => {
    const userData = [
        {
            title: 'surname',
            value: user.surname || ''
        },
        {
            title: 'name',
            value: user.name || ''
        }
    ]
    const userAtributes = [
        {
            title: 'phone',
            value: user.phone || '',
            type: 'text',
            svg: (svgSprite('AuthPhone', {
                className: classes.svgIcon
           }))
        },
        {
            title: 'email',
            value: user.email || '',
            type: 'text',
            svg: svgSprite('AuthEmail', {
                className: classes.svgIconEmail
            })
        },
        {
            title: 'password',
            value: 12345678 ,
            type: 'password',
            svg: svgSprite('AuthPassword', {
                className: classes.svgIcon
            })
        }
    ]
        
    
    const [disabled, setDisabled] = useState(true)
    const [editVisible, setEditVisible] = useState(true)
    const editBtn = () => {
        setDisabled(false)
        setEditVisible(false)
    }
    const cancelBtn = () => {
        setEditVisible(true)
        setDisabled(true)
    }
    const [inputData, setInputData] = React.useState({
         email: user.email,
         phone: user.phone,
         password: 12345678,
         svg:  svgSprite || ''
    })

    const updateHandler = async (id) => {
        console.log('hello')
        const url = `${NET.BACK_URL}/ru/office/profile`
        const data = await getData(url)
            const profile = data.data
            setInputData({
                email: user.email,
                phone: user.phone,
                password: 12345678
            })
            setEditVisible(true)
    }

    return (
        <div >
            <div >
                <div className={classes.profileUser}>{user.surname} {user.name}</div>
            </div>
            {
                userAtributes.map((el, idx) => (
                    <ProfileLispItem 
                        classes={classes}
                        el={el}
                        key={`lispItem${idx}`}
                        disabled={disabled}
                        inputData={inputData}
                        setInputData={setInputData}
                    /> 
                ))
            }
            {/* <div className={classes.editBtnPos}>
                {editVisible ? 
                     (<button onClick={editBtn} 
                              className={classes.editBtn}>редактировать</button>)
                               : (
                     <div className={classes.profileBtns}>
                        <button className={classes.cancelBtn} onClick={cancelBtn}>отмена</button>
                        <button onClick={updateHandler} className={classes.saveDataBtn}>сохранить</button>
                     </div>
                     )}
            </div> */}
        </div>
    )
}
export default ProfileLisp