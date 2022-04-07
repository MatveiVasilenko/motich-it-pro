
import React, {useMemo, useState} from 'react'
import GridComponent from './../../../widgets/grid/GridComponent'
import {NET} from './../../../network'
import gridClasses from './../../../widgets/grid/grid-styles.module.scss'
import globalStyles from './../../../styles/layouts/office-layouts-styles.module.scss'
import { getData, getGridHandlers } from './../../../common/utils'
import GridButton from '../../../widgets/grid/controls/GridButton'
import CreateSubCoursesModal from './components/CreateSubCoursesModal'
import { useRouter } from 'next/router';
import { DATA } from './../../../project/data';


const AdminSubCoursesView = ({
    subcourses
}) => {
  
    const thead = [
        {
            title: 'ID',
            alias: 'id',
            width: 50
        },
        // {
        //     title: 'ID-c',
        //     alias: 'course_id',
        //     width: 50
        // },
        {
            title: 'Позиция',
            alias: 'position',
            width: 70
        },
        {
            title: 'Название подкурса',
            alias: 'title',
            width: 350
        },
        {
            title: "Статус",
            alias: 'open',
            width: 100
        },
        // {
        //     title: 'Картинка',
        //     alias: 'img',
        //     width: 180
        // },
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
        // {
        //     name: 'course_id',
        //     type: 'text',
        //     value: 'value',
        //     width: 50
        // },
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
            name: 'open',
            type: 'text',
            value: 'value',
            width: 100
        },
        // {
        //     name: 'img',
        //     type: 'image',
        //     value: 'value',
        //     width: 180
        // },
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
                            value = 'закрыт.'
                        } else if (elem[key] == 'false') {
                            value = 'закрыт'
                        } else if (elem[key] == '1') {
                            value = 'открыт'
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

    const router = useRouter()
    

    const [gridData, setGridData] = React.useState(transformData(thead, subcourses))
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [activeFilter, setActiveFilter] = useState(router.query.id)

    const [dataItem, setDataItem] = useState({
       title: '',
       courses_id: activeFilter,
       date: '',
       open: '',
       img: ''
    })
    const [createModalConfig, setCreateModalConfig] = useState({
        title: 'Создание подкурса',
        type: 'create',
        btn: 'Создать подкурс'
    })

    React.useEffect(() => {
        (async() => {
            // if (activeFilter != router.query.id) {
            //     console.log('!')
                const data = await getData(`${NET.BACK_URL}/courses?id=${activeFilter}`) 
                setGridData(transformData(thead, data))
            // }
        })()
    }, [activeFilter, setActiveFilter])

    const watchHandler = (id, course_id) => {
        router.push(`/ru/admin/modules?id=${id}&course_id=${course_id}`)
    }
    const btnBack = () => {
        router.push(`/ru/admin/courses`)
    }

      const updateHandler = async (id) => {
        console.log('hello')
        const url = `${NET.BACK_URL}/courses/${id}`
        const data = await getData(url)
       
            const subcourse = data.data
           
            setDataItem({
               id:subcourse.id,
               open: subcourse.open,
               title: subcourse.title,
               course_id: subcourse.course_id,
               position: subcourse.position,
               img:subcourse.img,
               date: subcourse.date,
               description: subcourse.description
               
            })
          setCreateModalConfig({
            title: 'Редактировать подкурс',
            type: 'update',
            btn: 'Редактировать подкурс'
        })
       setShowModalCreate(true)
    }
    const deleteHandler =  async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить подкурс?')) {
           const url = `${NET.BACK_URL}/courses/${id}`
           const data = await getData(url, 'DELETE')
        
           setGridData( transformData(thead, data.data))
        } 
     }

    
    const handlerShowCreate = () => {
        setDataItem({
            course_id: activeFilter,
            title:'',
            date: '',
            open: false,
            img: '',
            description: ''
        })
        setCreateModalConfig({
            title: 'Создание подкурса',
            type: 'create',
            btn: 'Создать подкурс'
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
            <div className={gridClasses.title}>Подкурсы (уровни)</div>
            <div className={gridClasses.btnGroup}>
                <div className={gridClasses.btnGroup__item}>
                    <GridButton 
                        classes={gridClasses}
                        title="Создать подкурс"
                        handlerShowCreate={handlerShowCreate}
                    /> 
                </div>
                <div className={gridClasses.btnGroup__item}>
                    <button className={gridClasses.btn} onClick={btnBack}>Назад к курсам</button>
                </div>
            </div>
            <div className={globalStyles.grid__wrapper}>
                <GridComponent 
                    gridData={gridData}
                    elems={elems}
                    customStyles={gridClasses}
                    settings={{
                        //Включает порядковые номера у строк
                        counter: true,
                        net: NET,
                        //Включает блок фильтров и поиска
                        filter: true,
                        routeFilter: `courses?id=null&companies_id=${DATA.companies_id}`
                    }}
                    gridHandlers={gridHandlers}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                    
                />
            </div>
           {showModalCreate && <CreateSubCoursesModal
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
export default AdminSubCoursesView