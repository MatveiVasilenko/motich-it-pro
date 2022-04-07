import React from 'react'
import Input from './../../../../widgets/editor/cells/Input';
import classes from './../../../../widgets/editor/editor.module.scss'
import { changeType, langConsructorFunc } from './utils';
import TextArea from './../../../../widgets/editor/cells/text-area/TextArea';
import CK from './../../../../widgets/editor/cells/CK';
import Article from './../../../../widgets/editor/cells/editor-article/Article';
import ArrElems from './cells/ArrElems';
import EditorCheck from './../../../../widgets/editor/cells/editor-check/EditorCheck';

const ConstructorSwitcher = ({
    keyItem,
    itemConstructor,
    dataItem,
    setDataItem
}) => {
    const title = langConsructorFunc(keyItem)
    const config = {
        // net,
        title: title || '',
        // link: itemEditor.link || '',
        // url: itemEditor.url || '',
        attribute: keyItem || '',
        // placeholder: itemEditor.placeholder || '',
        // routeSearch: itemEditor.routeSearch || '',
        // options: itemEditor.options || [],
        classes,
        dataItem,
        setDataItem,
        // errors: errorData.error && errorData.error[itemEditor.name] || {}
    }
    const type = changeType(keyItem)
    switch (type) {
        case 'string':        
        return <Input {...config}/>

        case 'text-area':        
        return <TextArea {...config}/>

        case 'arr-elems':
        return <ArrElems {...config}/>

        // case 'image':
        // return <Image {...config}/>
     
        // case 'select':
        // return <Select {...config}/>

        // case 'select-search':
        // return <SelectSearch {...config}/>

        // case 'ck':
        // return <CK {...config}/>

        // case 'radio':
        // return <EditorRadio {...config}/>
        
        case 'check': 
        return <EditorCheck {...config}/>

        // case 'date': 
        // return <EditorDate {...config}/>

        // case 'phone': 
        // return <EditorPhone {...config}/>
        case 'article': 
        return <Article {...config}/>
        default:
        return <div></div>    
    }
}
export default ConstructorSwitcher