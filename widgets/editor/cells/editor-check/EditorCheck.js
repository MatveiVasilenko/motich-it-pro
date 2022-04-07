import React, {
    useState, useEffect
} from 'react'
import { NET } from './../../../../network';

const EditorCheck = ({
    net,
    classes,
    options,
    dataItem,
    attribute = 'open',
    setDataItem,
    title, 
    link,
    url,
    errors
}) => {
    const [check, setCheck] = useState(false)
    const handleChange = () => {      
        console.log(check, dataItem)
        setCheck(!check)
        if (check === false || +check === 0) {
            setDataItem({
                ...dataItem,
                [attribute]: 1
            })
        } else if (check === true || +check === 1) {
            setDataItem({
                ...dataItem,
                [attribute]: 0
            })
        }
    }
    useEffect(() => {
        if (dataItem[attribute] && !check && dataItem[attribute] !== 'false') {
            setCheck(+dataItem[attribute])
        }
    }, [])
    const handlerLink = () => {
        window.open(`${net.FRONT_URL}${url}`, '_blank')
    }
    return (
        <div style={{'margin-bottom': '16px'}}>
            <div style={{'margin-bottom': '0'}} className={classes.editor__checkWrapper}>
                <div 
                    className={check ? [classes.editor__check, classes.editor__check__active].join(' ') : classes.editor__check}
                    onClick={handleChange}
                    >                    
                </div>
                <div className={classes.editor__checkTitle}>
                    <div>{title ? title : ''}</div>
                    <div 
                        className={classes.editor__checkTitle__link}
                        onClick={handlerLink}
                        >{link ? link: ''}</div>
                </div>
            </div>
            <div className={classes.editor__error}>
                {errors && errors.length > 0 && errors.map((err, idx) => (
                    <div key={`err${attribute}${idx}`}>{err}</div>
                ))}
            </div>
        </div>
    )
}
export default EditorCheck