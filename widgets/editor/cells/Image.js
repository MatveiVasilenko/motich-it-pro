import {useState, useEffect} from 'react'
import { NET } from './../../../network';

const Image = ({
    dataItem,
    setDataItem,
    title,
    attribute,
    classes
}) => {
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        if (dataItem[attribute]) {
            setPreview(`${NET.FRONT_URL}/storage/image${dataItem[attribute].substring(6,40)}`)
        }
    }, [])
    const changeHandler = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        setDataItem({
            ...dataItem,
            [attribute]: e.target.files[0]
        })
        setPreview(url)
    }
    return (
        <div>
            <div>{title}</div>
            <div className={classes.editor__item__image}>
                <div>
                    <input type="file" onChange={changeHandler}/>
                </div>
                <div className={classes.editor__item__image__img}>
                    {preview && <div>
                            <img src={preview}></img>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default Image