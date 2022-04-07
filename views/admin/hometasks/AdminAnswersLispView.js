import {useState, useEffect, useMemo} from 'react'
import classes from './../../../styles/views/office/hometask-view.module.scss'
import globalStyles from './../../../styles/layouts/office-layouts-styles.module.scss'
import gridClasses from './../../../widgets/grid/grid-styles.module.scss'
import { lang } from '../../../project/data';
import Loader from '../../../widgets/ui/Loader';
import GridComponent from '../../../widgets/grid/GridComponent';
import { NET } from '../../../network';
import { useRouter } from 'next/router';
import { getData, getGridHandlers } from '../../../common/utils';
import { getGridAdminAnswers } from '../../../common/gridgenerator';
import AnswersModal from './lisp/AnswersModal';

const AdminAnswersLispView = ({
    answers
}) => {
    console.log(answers)
    const langData = {
        title: lang === 'ru' ? 'Ответы на задания' : 'Відповіді по завданням'
    }
    const router = useRouter()
    const [activeFilter, setActiveFilter] = useState(false)
    
    const gridAdminAnswers = useMemo(() => getGridAdminAnswers(), [])

    const transformData = (head, body) => {
        const header = head && head.map(el => el.alias)

        const boder = body.map((elem) => {
            let accum = {}
            header.map((headItem) => {
                Object.keys(elem).map((key) => {
                    if (key === 'status') {
                        let value = ''
                        if (elem[key] == 'check') {
                            value = 'Открыт'
                        } else if (elem[key] == 'ready') {
                            value = 'Проверено'
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
    const [gridData, setGridData] = useState(answers?.data ? transformData(gridAdminAnswers.thead, answers.data.data) : false)
    const [modalConfig, setModalConfig] = useState({})
    const [dataItem, setDataItem] = useState({})
    const [showModalAnswers, setShowModalAnswers] = useState(false)

    useEffect(() => {
        (async() => {
            if (activeFilter) {
                const data = await getData(`${NET.BACK_URL}/mion/answertask/${activeFilter}`) 
                setGridData(transformData(gridAdminAnswers.thead, data.data.data))
            }
        })()
    }, [activeFilter, setActiveFilter])

    const updateHandler = async (id) => {
        const url = `${NET.BACK_URL}/mion/answertask-item/${id}`
        const data = await getData(url)
        const answer = data.data
        setDataItem({
            id: answer.id,
            link: answer.link,
            rating: answer.rating,
            comment: answer.comment,
            comment_auth: answer.comment_auth,
            status: answer.status
        })
        setModalConfig({
            title: 'Редактировать урок подкурса',
            type: 'update',
            btn: 'Редактировать урок'
        })
        setShowModalAnswers(true)
    }

    const gridHandlers = useMemo(() => getGridHandlers(
        null,
        updateHandler
    ), [])

    const afterSuccess = (data) => {
        console.log('!!')
        setShowModalAnswers(false)
        setDataItem({

        })
        setGridData(transformData(gridAdminAnswers.thead, data.data))
    }

    return (
        <div className={globalStyles.containerAdmin}>
            <div className={globalStyles.title}>{langData.title}</div>

            {gridData ? <div className={gridClasses.gridWrapper}>
                <GridComponent 
                    gridData={gridData}
                    elems={gridAdminAnswers.elems}
                    customStyles={gridClasses}
                    settings={{
                        //Включает порядковые номера у строк
                        counter: true,
                        net: NET,
                        //Включает блок фильтров и поиска
                        filter: true,
                        routeFilter: `mion/hometask?course_id=${router.query.id}`,
                        filterPag: true
                    }}
                    gridHandlers={gridHandlers}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    
                />
            </div> : <Loader />}
            {showModalAnswers && <AnswersModal
                showModalCreate={showModalAnswers}
                setShowModalCreate={setShowModalAnswers}
                dataItem={dataItem}
                setDataItem={setDataItem}
                afterSuccess={afterSuccess}
                createModalConfig={modalConfig}
            />}
        </div>
    );
}

export default AdminAnswersLispView;