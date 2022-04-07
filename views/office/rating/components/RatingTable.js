import { useState, useEffect, useMemo } from 'react';
import GridComponent from './../../../../widgets/grid/GridComponent';
import { getGridRating } from './../../../../common/gridgenerator';
import { useRouter } from 'next/router';
import { getGridHandlers } from '../../../../common/utils';
import { NET } from './../../../../network';

const RatingTable = ({
    classes,
    users
}) => {
    const gridRating = useMemo(() => getGridRating(), [])
    
    const transformData = (head, body) => {
        const header = head && head.map(el => el.alias)

        const boder = body.map((elem) => {
            let accum = {}
            header.map((headItem) => {
                Object.keys(elem).map((key) => {
                    if (key === 'rating') {
                        let value = ''
                        if (elem[key]) {
                            value = elem[key]
                        } else {
                            value = '0'
                        }
                        console.log(value)
                        return accum[key] = value
                    } else if (headItem === key) {
                        accum[key] = elem[key]
                    }
                })
            })
            return accum
        })
        return {
            header: head,
            boder
        }
    }

    

    const [gridData, setGridData] = useState(null)
    const [activeFilter, setActiveFilter] = useState({})
    
    useEffect(() => {
        setGridData(transformData(gridRating.thead, users))
    }, [activeFilter, setActiveFilter])

    const router = useRouter()

    
    const gridHandlers = useMemo(() => getGridHandlers(
        
    ), [])

    if (!gridData) return null
    return (
        <div className={classes.rating__body__table}>
            <div>
            <GridComponent 
                gridData={gridData}
                elems={gridRating.elems}
                customStyles={classes}
                settings={{
                    //Включает порядковые номера у строк
                    counter: true,
                    net: NET,
                    //Включает блок фильтров и поиска
                    filter: false,
                    routeFilter: 'courses',
                    grid100: true
                }}
                gridHandlers={gridHandlers}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                
            />
            </div>
        </div>
    )
}
export default RatingTable