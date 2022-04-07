import React, {
    useState
} from 'react'
import { NET } from '../../../../network'
import ConstructorSwitcher from '../switcher/ConstructorSwitcher'
import { DATA } from './../../../../project/data';

const SiteConstructorSection = ({
    classes,
    fields,
    config,
    keyConfig,
    setShowModal,
    setKeyConfig,
    setFields,
    setConfigData
}) => {
    const [dataItem, setDataItem] = useState(fields.data)
    const updateCompany = async () => {
        try {
            const response = await fetch(`${NET.BACK_URL}/company-options/${DATA.companies_id}`, {
                method: 'POST',
                body: JSON.stringify({
                    config: {
                        ...config,
                        [keyConfig]: {
                            ...config[keyConfig],
                            data: dataItem
                        }
                    }
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                const result = await response.json()
                setShowModal(false)
                setFields(false)
                setKeyConfig(false)
                setConfigData(JSON.parse(result.data.config))
            }
        } catch (e) {

        }
    }
    return (
        <div>
            {fields && Object.keys(fields.data).map((keyItem) => (
                <ConstructorSwitcher 
                    keyItem={keyItem}
                    itemConstructor={fields.data[keyItem]}
                    classes={classes}
                    dataItem={dataItem}
                    setDataItem={setDataItem}
                />
            ))}
            <div>
                <button className={classes.buttonEdit} onClick={updateCompany}>Редактировать</button>
            </div>
        </div>
    )
}
export default SiteConstructorSection