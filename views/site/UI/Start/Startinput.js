import { React } from 'react';
import styles from '../../../../styles/views/site/site-view-styles.module.scss';
import classes from '../../../../styles/widgets/form-styles.module.scss'
// import Input from '../../../../widgets/editor/cells/Input';
import Input from './../../../../widgets/form/components/Input';
import PhoneInput from 'react-phone-input-2';
import svgSprite from '../../../../project/svg/svgSprite';

const Startinput = ({
    plhold,
    type,
    attribute,
    errors,
    dataItem,
    setDataItem,
    svgIcon
}) =>{
    return(
        <div className={styles.start__intut}>
            <div className={errors && errors[attribute] && errors[attribute].length > 0 ? [classes.phone, classes.input__error].join(' ') : classes.phone} >
                {type === 'phone' ? <div className={styles.start__intut__phone}>
                    {svgIcon && (<div className={classes.inputIcon}>
                        {svgSprite(svgIcon, {
                            className: svgIcon === 'AuthEmail' ? classes.svgInputEmail : classes.svgInput
                        })}
                    </div>)}
                    <PhoneInput 
                        country={'ua'} 
                        placeholder={plhold} 
                        value={dataItem[attribute]} 
                        onChange={(e) => {
                            setDataItem({
                                ...dataItem,
                                [attribute]: e
                            })
                        }}
                    /> 
                </div>: <Input 
                    classes={classes}
                    data={dataItem}
                    setData={setDataItem}
                    attribute={attribute}
                    errors={{}}
                    placeholder={plhold}
                    svgIcon={svgIcon}
                />}
            </div>
            <div className={classes.editor__error}>
                {errors && errors[attribute] && errors[attribute].length > 0 && errors[attribute].map((err, idx) => (
                    <div style={{color: '#cd0f32', 'margin-bottom': '6px', textAlign: 'center'}} key={`err${attribute}${idx}`}>{
                        err === 'The phone has already been taken.' ? "Пользователь с таким телефон уже зарегистрирован, чтобы продолжить оплату обратитесь на mion.courses@gmail.com" : "Поле должно быть заполнено"
                    }</div>
                ))}
            </div>
        </div>

        
    )
}

export default Startinput