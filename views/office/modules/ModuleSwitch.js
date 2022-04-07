import React from 'react' 
import Tests from './components/tests/Tests';
import Video from './components/Video';

const ModuleSwitch = ({
    moduleData,
    setModuleData,
    classes
}) => {
    const {
        type
    } = moduleData
    const config = {
        ...moduleData,
        classes
    }
    switch (type) {
        case 'video': 
            return <Video 
                {...config} 
                setModuleData={setModuleData}
                />
        case 'test':
            return <Tests 
                {...config}
                setModuleData={setModuleData}
            />
        default:
            return <div>Неизвестный тип модуля</div>
    }
}
export default ModuleSwitch