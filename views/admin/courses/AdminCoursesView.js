import React, {useMemo, useState} from 'react'
import GridComponent from './../../../widgets/grid/GridComponent'
import {NET} from './../../../network'
import classes from './../../../widgets/grid/grid-styles.module.scss'
import globalStyles from './../../../styles/layouts/office-layouts-styles.module.scss'
import { getData, getGridHandlers } from './../../../common/utils'
import GridButton from '../../../widgets/grid/controls/GridButton'
import CreateCoursesModal from './components/CreateCoursesModal'
import { useRouter } from 'next/router';
import { DATA } from './../../../project/data';


const AdminCoursesView = ({
    courses, activeFilter, setActiveFilter
}) => {
    const thead = [
        {
            title: 'ID',
            alias: 'id',
            width: 50
        },
        {
            title: 'Позиция',
            alias: 'position',
            width: 70
        },
        {
            title: 'Название курса',
            alias: 'title',
            width: 350
        },
        {
            title: "Дата",
            alias: 'date',
            width: 200
        },
        {
            title: 'Картинка',
            alias: 'img',
            width: 180
        },
        {
            title: 'Действия',
            alias: 'buttons',
            width: 150
        }
    ]
    const elems = [
        {
            name: 'id',
            type: 'text',
            value: 'value',
            width: 50
        },
        {
            name: 'position',
            type: 'text',
            value: 'value',
            width: 70
        },
        {
            name: 'title',
            type: 'text',
            value: 'value',
            width: 350
        },
        {
            name: 'date',
            type: 'text',
            value: 'value',
            width: 200
        },
        {
            name: 'img',
            type: 'image',
            value: 'value',
            width: 180
        },
        {
            name: 'buttons',
            type: 'buttons',
            value: ['watch', 'update', 'delete'],
            width: 150
        }   
    ]

    const transformData = (head, body) => {
        const header = head && head.map(el => el.alias)

        const boder = body.map((elem) => {
            let accum = {}
            header.map((headItem) => {
                Object.keys(elem).map((key) => {
                    if (key === 'open') {
                        let value = ''
                        if (elem[key] == '0') {
                            value = 'не опл.'
                        } else if (elem[key] == 'false') {
                            value = 'розгляд'
                        } else if (elem[key] == '1') {
                            value = 'опл.'
                        }
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

    

    const [gridData, setGridData] = React.useState(null)
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [dataItem, setDataItem] = useState({
        companies_id: DATA.companies_id,
        title: '',
        courses_id: activeFilter,
        position: 0,
        date: '',
        open: '',
        img: '',
        description: ''
    })

    const [createModalConfig, setCreateModalConfig] = useState({
        title: 'Создание курса',
        type: 'create',
        btn: 'Создать курс'
    })
    
    React.useEffect(() => {
        setGridData(transformData(thead, courses))
    }, [activeFilter, setActiveFilter])

    const router = useRouter()
    const watchHandler = (id) => {
        router.push(`/ru/admin/subcourses?id=${id}`)
    }
        const updateHandler = async (id) => {
            const url = `${NET.BACK_URL}/courses/${id}`
            const data = await getData(url)
                const course = data.data
               
                setDataItem({
                   id:course?.id,
                   title: course?.title,
                   date: course?.date,
                   open: course?.open,
                   position: course?.position,
                   description: course?.description,
                   img: course?.img,
                   small_description: course?.small_description
                })
              setCreateModalConfig({
                title: 'Редактирование курса',
                type: 'update',
                btn: 'Редактировать курс'
            })
           setShowModalCreate(true)
        }
       
    const deleteHandler =  async (id) => {
        if (window.confirm('Вы уверены что хотите удалить курс?')) {
           const url = `${NET.BACK_URL}/courses/${id}`
           const data = await getData(url, 'DELETE')
              setGridData( transformData(thead, data.data))
        } 
     }

    const handlerShowCreate = () => {
        setDataItem({
            companies_id: DATA.companies_id,
            courses_id: activeFilter,
            title:'',
            date: '',
            open: '0',
            img: '',
            description: ''
        })
        setCreateModalConfig({
            title: 'Создание курса',
            type: 'create',
            btn: 'Создать курс'
        })
        setShowModalCreate(true)
    }

    
    const afterSuccessCreate = (data) => {
        setShowModalCreate(false)
            setGridData(transformData(thead, data))
             setDataItem('')
    }
    
    const gridHandlers = useMemo(() => getGridHandlers(
        watchHandler,
        updateHandler,
        deleteHandler
    ), [])

    if (!gridData) return null
  
   
    return (
        <div>
            <div className={classes.title}>Курсы</div>
            <GridButton 
              classes={classes}
              title="Создать курс"
              handlerShowCreate={handlerShowCreate}
            /> 
            <div className={globalStyles.grid__wrapper}>
                <GridComponent 
                    gridData={gridData}
                    elems={elems}
                    customStyles={classes}
                    settings={{
                        //Включает порядковые номера у строк
                        counter: true,
                        net: NET,
                        //Включает блок фильтров и поиска
                        filter: false,
                        routeFilter: 'courses'
                    }}
                    gridHandlers={gridHandlers}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                    
                />
            </div>
            {showModalCreate && <CreateCoursesModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
                dataItem={dataItem}
                setDataItem={setDataItem}
                afterSuccess={afterSuccessCreate}
                createModalConfig={createModalConfig}
                role={"admin"}
            />}
         </div>
    )
}
export default AdminCoursesView