import React, {
    useEffect, useState
} from 'react'

const DemoText = ({
    title,
    classes,
    dataItem,
    attribute
}) => {
    // const [val, setVal] = useState()
    // useEffect(() => {
    //     if (dataItem[attribute]) {
    //         setVal(dataItem[attribute])
    //     }
    // }, [])
    return (
        <div className={classes.editor__item}>
            <div className={classes.editor__item__title}>
                {title}
            </div>
            <div>
                {dataItem[attribute]}
            </div>
        </div>
    )
}
export default DemoText