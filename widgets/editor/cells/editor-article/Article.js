import {useState, useEffect} from 'react'
import CKEditor  from 'ckeditor4-react';

const Article = ({
    dataItem,
    attribute,
    setDataItem,
    title,
    classes,
    errors,
    changeFunc = false,
    value = false
}) => {
    const [data, setData] = useState(!value && dataItem && dataItem[attribute] ? dataItem[attribute] : 'Введите текст')
    const onChange = (e) => {
        if (changeFunc) {
            changeFunc(e, 'article')
        } else {
            setDataItem({
                ...dataItem,
                [attribute]: e.editor.getData()
            })
        }
    }
    return (
        <div className={classes.editor__item}>
            <div className={classes.editor__item__title}>
                {title}
            </div>
            <div>
                <CKEditor 
                    data={value ? value : data}
                    onChange={onChange}
                    config={{}}
                    style={{
                        width: '100%'
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
export default Article