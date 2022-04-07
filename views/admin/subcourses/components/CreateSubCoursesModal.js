import React, {
    useState, useMemo
} from 'react'
import Editor from '../../../../widgets/editor/Editor'
import Modal from '../../../../widgets/modal/Modal'
import {NET} from '../../../../network';
import { getFieldsSubCourses } from '../../../../common/utils';

const CreateSubCoursesModal = ({
    showModalCreate,
    setShowModalCreate,
    dataItem,
    setDataItem,
    afterSuccess,
    createModalConfig,
    role
}) => {
    const fields = useMemo(() => getFieldsSubCourses(role), [showModalCreate, setShowModalCreate])
    
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
export default CreateSubCoursesModal