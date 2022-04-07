import React from 'react'

const TypeItem = ({
    item,
    chooseTypeFunc,
    classes,
    adminStyles
}) => {
    return (
        <div>
            <div 
                onClick={() => chooseTypeFunc(item)}
                className={adminStyles.btn}
                >{item.title} {item.works ? '' : '(beta-версия)'}</div>
        </div>
    )
}
export default TypeItem