import React from 'react'
import PhoneInput from 'react-phone-input-2'
import classes from '../../../../styles/widgets/form-styles.module.scss'
import svgSprite from './../../../../project/svg/svgSprite';

const EditorPhone = ({
    title,
    placeholder,
    dataItem,
    setDataItem,
    attribute,
    errors,
    svgIcon = 'AuthPhone'
}) => {
    return (
        <div className={classes.input__phone}>
            <div className={errors && errors.length > 0 ? [classes.phone, classes.input__error].join(' ') : classes.phone} >
                {svgIcon && (<div className={classes.inputIcon}>
                    {svgSprite(svgIcon, {
                        className: svgIcon === 'AuthEmail' ? classes.svgInputEmail : classes.svgInput
                    })}
                </div>)}
                <PhoneInput 
                    country={'ua'} 
                    placeholder={placeholder} 
                    value={dataItem[attribute]} 
                    onChange={(e) => {
                        setDataItem({
                            ...dataItem,
                            [attribute]: e
                        })
                    }}
                />
            </div>
            <div className={classes.editor__error}>
                {errors && errors.length > 0 && errors.map((err, idx) => (
                    <div key={`err${attribute}${idx}`}>{err}</div>
                ))}
            </div>
        </div>
    )
}
export default EditorPhone