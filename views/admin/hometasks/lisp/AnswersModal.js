import React, {
    useState, useMemo
} from 'react'
import Editor from '../../../../widgets/editor/Editor'
import Modal from '../../../../widgets/modal/Modal'
import {NET} from '../../../../network';
import { getFieldsAdminAnswers } from '../../../../common/utils';

const AnswersModal = ({
    showModalCreate,
    setShowModalCreate,
    dataItem,
    setDataItem,
    afterSuccess,
    createModalConfig,
    role
}) => {
    const fields = useMemo(() => getFieldsAdminAnswers(role, dataItem.type), [showModalCreate, setShowModalCreate])
    
    return (
        <Modal
            showModal={showModalCreate}
            setShowModal={setShowModalCreate}
            title={createModalConfig.title}
        >
            <Editor 
                fields={fields.fields}
                dataItem={dataItem}
                setDataItem={setDataItem}
                route={createModalConfig.type === 'create' ? 'mion/answertask' : `mion/answertask`}
                afterSuccess={afterSuccess}
                net={NET}
                createModalConfig={createModalConfig}
            />
        </Modal>
    )
}
export default AnswersModal