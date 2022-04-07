import React, {useMemo, useState} from 'react'
import GridComponent from './../../../widgets/grid/GridComponent'
import {NET} from './../../../network'
import classes from './../../../styles/views/admin/admin-modules-view-styles.module.scss'
import gridClasses from './../../../widgets/grid/grid-styles.module.scss'
import globalStyles from './../../../styles/layouts/office-layouts-styles.module.scss'
import adminStyles from './../../../styles/layouts/admin-layouts-styles.module.scss'
import { getData, getGridHandlers } from './../../../common/utils'
import GridButton from '../../../widgets/grid/controls/GridButton'
import CreateModulesModal from './components/CreateModulesModal'
import { useRouter } from 'next/router';
import ChooseTypeModal from './components/ChooseTypeModal'
import { getGridOfficeModules } from '../../../common/gridgenerator/officeGridGen'


const AdminModulesView = ({
    modules
}) => {
    
    const gridDataModules = useMemo(() => getGridOfficeModules(), [])

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
                    } else if (key === 'hometask_id') {
                        let value = '-';
                        if (elem[key]) {
                            value = 'Есть'
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

    const [gridData, setGridData] = React.useState(transformData(gridDataModules.thead, modules.data))
    // setGridData()
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [chooseTypeModal, setChooseTypeModal] = useState(false)
    const [activeFilter, setActiveFilter] = useState(router.query.id)
    const [dataItem, setDataItem] = useState({
       title: '',
       courses_id: activeFilter,
       path: '',
       open: '',
       img: ''
    })
    const [createModalConfig, setCreateModalConfig] = useState({
        title: 'Создать урок подкурса',
        type: 'create',
        btn: 'Создать урок'
    })
    
    React.useEffect(() => {
        (async() => {
            // if (activeFilter != router.query.course_id) {
                const data = await getData(`${NET.BACK_URL}/modules?id=${activeFilter}`) 
                setGridData(transformData(gridDataModules.thead, data.data))
            // }
        })()
    }, [activeFilter, setActiveFilter])

    const watchHandler = (id) => {
        router.push(`/ru/office/modules?course_id=${router.query.course_id}`)
    }
    const btnBack = () => {
        router.push(`/ru/admin/subcourses?id=${router.query.course_id}`)
    }

    const updateHandler = async (id) => {
        const url = `${NET.BACK_URL}/modules/${id}`
        const data = await getData(url)
        const module = data.data
        setDataItem(module)
        setCreateModalConfig({
            title: 'Редактировать урок подкурса',
            type: 'update',
            btn: 'Редактировать урок'
        })
       setShowModalCreate(true)
    }
    const deleteHandler =  async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить модуль?')) {
           const url = `${NET.BACK_URL}/modules/${id}`
           const data = await getData(url, 'DELETE')
           console.log(data)
           setGridData( transformData(gridDataModules.thead, data.data))
        } 
     }

    const handlerShowCreate = () => {
        setChooseTypeModal(true)
    }
    const chooseTypeFunc = (type) => {
        setChooseTypeModal(false)
        setDataItem({
            course_id: activeFilter,
            path: '',
            title:'',
            open: false,
            description: '',
            type: type.value
        })
        setCreateModalConfig({
            title: 'Создание урока подкурса',
            type: 'create',
            btn: 'Создать урок'
        })
        setShowModalCreate(true)
    }
    
    const afterSuccessCreate = (data) => {
        setShowModalCreate(false)
        setGridData(transformData(gridDataModules.thead, data))
        setDataItem('')
    }
    
    const homeHandler = async (id, idSub, elem) => {
        if (elem?.hometask_id !== '-') {
            const deleteHometask = confirm('Вы хотите удалить домашнее задание для этого урока?')
            if (deleteHometask) {
                const data = await getData(
                    `${NET.BACK_URL}/mion/hometask/${elem.id}`,
                    'DELETE'
                )
                setGridData(transformData(gridDataModules.thead, data.data))
            }
        } else {
            const createHometask = confirm('Вы хотите создать домашнее задание для этого урока?')
            if (createHometask) {
                const data = await getData(
                    `${NET.BACK_URL}/mion/hometask`,
                    'POST',
                    {
                        course_id: router.query.id,
                        module_id: id
                    }
                )
                setGridData(transformData(gridDataModules.thead, data.data))
            }
        }
    }

    const gridHandlers = useMemo(() => getGridHandlers(
        watchHandler,
        updateHandler,
        homeHandler,
        deleteHandler
    ), [])

     if (!gridData) return null
   
    return (
        <div>
            <div className={gridClasses.title}>Урок (модуль)</div>
            <div className={gridClasses.btnGroup}>
                <div className={gridClasses.btnGroup__item}>
                    <GridButton 
                    classes={gridClasses}
                    title="Создать урок"
                    handlerShowCreate={handlerShowCreate}
                    /> 
                </div>
                <div className={gridClasses.btnGroup__item}>
                    <button className={gridClasses.btn} onClick={btnBack}>Назад к подкурсам</button>
                </div>
            </div>

            <div className={globalStyles.grid__wrapper}>
                <GridComponent 
                        gridData={gridData}
                        elems={gridDataModules.elems}
                        customStyles={gridClasses}
                        settings={{
                            //Включает порядковые номера у строк
                            counter: true,
                            net: NET,
                            //Включает блок фильтров и поиска
                            filter: true,
                            routeFilter: `courses?id=${router.query.course_id}`
                        }}
                        gridHandlers={gridHandlers}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        dataItem={dataItem}
                        setDataItem={setDataItem}
                        
                    />
            </div>
           {showModalCreate && <CreateModulesModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
                dataItem={dataItem}
                setDataItem={setDataItem}
                afterSuccess={afterSuccessCreate}
                createModalConfig={createModalConfig}
                role={"admin"}
            />}
            {chooseTypeModal && <ChooseTypeModal 
                gridClasses={gridClasses}
                classes={classes}
                adminStyles={adminStyles}
                chooseTypeModal={chooseTypeModal}
                setChooseTypeModal={setChooseTypeModal}
                chooseTypeFunc={chooseTypeFunc}
            />}
    </div>
    )
}
export default AdminModulesView