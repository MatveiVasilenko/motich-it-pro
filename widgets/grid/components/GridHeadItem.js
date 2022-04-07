import React from 'react'

const GridHeadItem = ({
    val,
    width,
    styles,
    customStyles
}) => {
    return (
        <div style={{
            width: width || '150px',
            'min-width': width || '150px',
        }} className={[styles.gridHeadItem, customStyles?.gridHeadItem].join(' ')}>{val}</div>
    )
}
export default GridHeadItem