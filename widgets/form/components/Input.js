import React, {
    useState
} from 'react'
import classes from './../../../styles/widgets/form-styles.module.scss'
import svgSprite from './../../../project/svg/svgSprite';
import FieldError from './FieldError';

const Input = ({
    attribute,
    data,
    setData,
    placeholder,
    type,
    svgIcon,
    errors
}) => {
    const [showPassword, setShowPassword] = useState(false)
    const error = errors[attribute]
    return (
        <>
            <div className={classes.inputWrapper}>
                <input
                className={error ? [classes.input, classes.inputError].join(' ') : classes.input} 
                value={data[attribute]} 
                placeholder={placeholder}
                type={!showPassword ? type : 'text'}
                onChange={(e) => {
                    setData({
                        ...data,
                        [attribute]: e.target.value
                    })
                }}/>
                {svgIcon && (<div className={classes.inputIcon}>
                    {svgSprite(svgIcon, {
                        className: svgIcon === 'AuthEmail' ? classes.svgInputEmail : classes.svgInput
                    })}
                </div>)}
                {type === 'password' && (<div 
                    className={classes.inputIconPassword}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {svgSprite(!showPassword ? 'OpenEye' : 'CloseEye', {
                        className: classes.svgInput
                    })}
                </div>)}

            </div>
                {!!error && <FieldError 
                    classes={classes}
                    textError={error}
                />}

        </>
    )
}
export default Input