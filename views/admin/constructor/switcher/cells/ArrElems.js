import React from 'react' 
import Article from '../../../../../widgets/editor/cells/editor-article/Article';
import { changeType } from '../utils'
import Input from './../../../../../widgets/editor/cells/Input';
import { langConsructorFunc } from './../utils';

const ArrElems = ({
    dataItem,
    attribute,
    setDataItem,
    classes
}) => {
    console.log(dataItem[attribute])
    return (
        dataItem[attribute].map((item, idx) => {
            if (item) {
                const keys = Object.keys(item)
                return keys.map((keyItem) => {
                    const type = changeType(keyItem)
                    let value = dataItem[attribute][idx][keyItem]
                    const title = langConsructorFunc(keyItem)
                    let changeFunc = (e, typeElem) => {
                        let newData = dataItem[attribute]
                            newData[idx][keyItem] = typeElem === 'article' ? e.editor.getData() : e.target.value
                            setDataItem({
                                    ...dataItem,
                                    [attribute]: newData
                            })
                    }
                    if (type === 'string') {
                        return <Input 
                            attribute={attribute}
                            classes={classes}
                            changeFunc={changeFunc}
                            value={value}
                            classes={classes}
                            title={title}
                        />
                    } else if (type === 'article') {
                        return <Article 
                            attribute={attribute}
                            classes={classes}
                            changeFunc={changeFunc}
                            value={value}
                            classes={classes}
                            title={title}
                        />
                    }
                })
            }
            
        })
    )
}
export default ArrElems