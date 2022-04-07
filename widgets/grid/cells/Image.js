import React from 'react'

const Image = ({
    value,
    name,
    width,
    styles,
    customStyles,
    net
}) => {
    return (
        <div style={{
            width: width,
            'min-width': width 
        }} className={[styles.gridRowItem, customStyles?.gridRowItem].join(' ')}>
            <div style={{background: value ? 'transparent' : '#ccc'}} className={styles.gridImage}>
                {value ? <img className={styles.gridImageItem} src={`${net.FRONT_URL}/storage/image${value.substring(6,40)}`} />:
                <div></div>}
            </div>
        </div>
    )
}
export default Image