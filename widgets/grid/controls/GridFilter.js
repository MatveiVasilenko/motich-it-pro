import React, {
    useState, useEffect
} from 'react'
import { getData } from './../../../common/utils'

const GridFilter = ({
    activeFilter,
    setActiveFilter,
    classes,
    config,
    staticData = false,
    options = [],
    dataItem = false,
    setDataItem
}) => {
    const {net, routeFilter, filterPag} = config

    const [filterParams, setFilterParams] = useState([])

    useEffect(() => {
        staticData ? 
            setFilterParams(options) :
        (async () => {
            const data = await getData(`${net.BACK_URL}/${routeFilter}`)
            if (filterPag) {
                setFilterParams(data.data.data)
            } else {
                console.log(filterPag)
                setFilterParams(data)
            }
        })()
    }, [])
    return (
        <select className={classes.gridFilter} value={activeFilter} onChange={(e) => {
            setActiveFilter(e.target.value)
            if (dataItem) {
                setDataItem({
                    ...dataItem,
                    courses_id: e.target.value
                }) 
            }
                
        }}>
            
            {filterParams && filterParams.map((el, idx) => (
                <option value={el.id} key={`opti${idx}`}>{el.title}</option>
                
            ))}
        </select>
    )
}

export default GridFilter