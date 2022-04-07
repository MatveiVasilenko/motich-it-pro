import React, {
    useState, useMemo
} from 'react'
import Editor from '../../../../widgets/editor/Editor'
import Modal from '../../../../widgets/modal/Modal'
import SiteConstructorSection from './SiteConstructorSection'

const UpdateModalConstructor = ({
    showModal,
    setShowModal,
    fields,
    classes,
    config,
    keyConfig,
    setFields,
    setKeyConfig,
    setConfigData
}) => {
    const closeModalConstructor = () => {
        setShowModal(false)
        setKeyConfig(false)
        setFields(false)
    }
    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={'Редактировать секцию'}
            closeModalFunc={closeModalConstructor}
        >
            <SiteConstructorSection 
                classes={classes}
                fields={fields}
                config={config}
                keyConfig={keyConfig}
                setShowModal={setShowModal}
                setFields={setFields}
                setKeyConfig={setKeyConfig}
                setConfigData={setConfigData}
            />
        </Modal>
    )
}
export default UpdateModalConstructor