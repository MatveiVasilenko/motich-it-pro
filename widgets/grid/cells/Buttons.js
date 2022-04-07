import React from 'react'
import { faEdit, faEye, faTrash, faUndo, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Buttons = ({
    idRow,
    idRowSub = false,
    value,
    width,
    gridHandlers,
    styles,
    gridElems
}) => {
    const buttons = Object.keys(gridHandlers || {})
    return (
        <div style={{
            width: width,
            'min-width': width 
        }} className={styles.buttonWrapper}>
            {buttons.map((button) => (
                <div onClick={() => gridHandlers[button](idRow, idRowSub, gridElems)} className={styles.buttonWrapperItem}>
                    <FontAwesomeIcon icon={
                        button === 'update' ?
                            faEdit : button === 'watch'?
                            faEye : button === 'delete' ?
                            faTrash : button === 'return' ?
                            faUndo : button === 'home' ?
                            faHome : ''
                    } />
                </div>
            ))}
        </div>
    )
}
export default Buttons