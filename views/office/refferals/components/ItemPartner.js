import React from 'react' 

const ItemPartner = ({
    classes,
    data,
    closed
}) => {
    return (
        <div style={{opacity: data.status === '1' ? 1 : 0.6}} className={classes.itemPartner}>
            <div>{data?.surname} {data?.name}</div>
            <div>{data?.created_at.substr(0, 10)}</div>
        </div>
    )
}
export default ItemPartner