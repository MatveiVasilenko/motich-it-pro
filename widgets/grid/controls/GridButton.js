import React from 'react' 
import  Link  from 'next/link';

const GridButton = ({
    classes,
    title = 'Создать',
    handlerShowCreate
}) => {
    return (
        <button className={classes.btn} onClick={handlerShowCreate}>
            {title}
        </button>
        
    )
}
export default GridButton