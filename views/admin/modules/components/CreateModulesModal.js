import React, {
    useState, useMemo
} from 'react'
import Editor from '../../../../widgets/editor/Editor'
import Modal from '../../../../widgets/modal/Modal'
import {NET} from '../../../../network';
import { getFieldsModules } from '../../../../common/utils';

const CreateModulesModal = ({
    showModalCreate,
    setShowModalCreate,
    dataItem,
    setDataItem,
    afterSuccess,
    createModalConfig,
    role
}) => {
    const fields = useMemo(() => getFieldsModules(role, dataItem.type, dataItem.hometask_id), [showModalCreate, setShowModalCreate])
    
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
                route={createModalConfig.type === 'create' ? 'modules' : `modules`}
                afterSuccess={afterSuccess}
                net={NET}
                createModalConfig={createModalConfig}
            />
        </Modal>
    )
}
export default CreateModulesModal