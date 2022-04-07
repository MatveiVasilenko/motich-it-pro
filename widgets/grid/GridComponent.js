import React from 'react'
import GridBody from './components/GridBody';
import GridHead from './components/GridHead';
import styles from './grid-styles.module.scss'
import GridControls from './controls/GridControls';

const GridComponent = ({
    gridData, // thead, tbody - данные с сервера
    elems, // какие будут колонки
    customStyles, // кастомные стили в scss
    settings,
    gridHandlers,
    activeFilter, // filter - true
    setActiveFilter ,// filter - true
    dataItem,
    setDataItem
}) => {
    const config = {
        ...settings,
        counter: settings.counter || false,
        net: settings.net || '',
        filter: settings.filter || false,
        routeFilter: settings.routeFilter || 'courses',
        grid100: settings.grid100 || false
    }
    return (
        <div
            style={{
                width: config.grid100 ? '100%' : 'auto'
            }}
        className={[styles.gridWrapper, customStyles?.gridWrapper].join(' ')}>
            {config.filter && <GridControls 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                styles={styles}
                config={config}
                dataItem={dataItem}
                setDataItem={setDataItem}
            />}
            <GridHead 
                styles={styles}
                thead={gridData.header}
                customStyles={customStyles}
                config={config}
            />
            <GridBody 
                styles={styles}
                tbody={gridData.boder}
                elems={elems}
                customStyles={customStyles}
                config={config}
                gridHandlers={gridHandlers}
                activeFilter={activeFilter}
            />
        </div>
    )
}
export default GridComponent

//Document styles - CustomStyles
// gridWrapper - main wrapper
// gridHead - main wrapper head
// gridHead
// gridHeadItem
// gridBody
// gridRow
// gridRowItem