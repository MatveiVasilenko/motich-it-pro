import React, {
    useState, useEffect, useCallback
} from 'react'
import UpdateModalConstructor from './UpdateModalConstructor';
import {sectionLangFunc} from './../switcher/utils'

const SiteConstructor = ({
    classes,
    config
}) => {
    const [fields, setFields] = useState(false)
    const [configData, setConfigData] = useState(config)
    const [keyConfig, setKeyConfig] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const showUpdateModal = useCallback((key) => {
        console.log(configData)
        setFields(configData[key])
        setKeyConfig(key)
    }, [configData, setConfigData])
    useEffect(() => {
        if (fields) {
            setShowModal(true)
        }
    }, [fields, setFields])

    return (
        <div>
            <div className={classes.title}>Конструктор сайта</div>
            <div className={classes.subtitle}>Выберите секцию для редактирования</div>
            {Object.keys(config).map((key) => {
                let nameSection = sectionLangFunc(key)
                return <div className={classes.nameSection} onClick={() => showUpdateModal(key)}>
                    <div>{nameSection}</div>
                </div>
            })}
            {showModal && <UpdateModalConstructor 
                classes={classes}
                fields={fields}
                showModal={showModal}
                setShowModal={setShowModal}
                config={configData}
                keyConfig={keyConfig}
                setShowModal={setShowModal}
                setKeyConfig={setKeyConfig}
                setFields={setFields}
                setConfigData={setConfigData}
            />}
        </div>
    )
}
export default SiteConstructor