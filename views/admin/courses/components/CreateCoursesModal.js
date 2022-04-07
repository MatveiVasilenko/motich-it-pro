import React, {
    useState, useMemo
} from 'react'
import Editor from '../../../../widgets/editor/Editor'
import Modal from '../../../../widgets/modal/Modal'
import {NET} from '../../../../network';
import { getFields } from '../../../../common/utils';

const CreateCoursesModal = ({
    showModalCreate,
    setShowModalCreate,
    dataItem,
    setDataItem,
    afterSuccess,
    createModalConfig,
    role
}) => {
    const fields = useMemo(() => getFields(role), [showModalCreate, setShowModalCreate])
    
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
                route={createModalConfig.type === 'create' ? 'courses' : `courses`}
                afterSuccess={afterSuccess}
                net={NET}
                createModalConfig={createModalConfig}
            />
        </Modal>
    )
}
export default CreateCoursesModal