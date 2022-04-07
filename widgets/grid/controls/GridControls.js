import React from 'react' 
import GridFilter from './GridFilter';

const GridControls = ({
    activeFilter,
    setActiveFilter,
    config,
    styles,
    dataItem,
    setDataItem
}) => {
    return (
        <div>
            <GridFilter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                classes={styles}
                config={config}
                dataItem={dataItem}
                setDataItem={setDataItem}
                
            />
        </div>
    )
}
export default GridControls