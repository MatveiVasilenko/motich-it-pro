import React from 'react'
import Office from './../../../layouts/office/Office';
import ProtectedOffice from './../../../global/decorators/ProtectedOffice';
import MainView from '../../../views/office/main/MainView';

const OfficeMain = () => {
    return (
        <ProtectedOffice>
            <Office>
                <MainView />
            </Office>
        </ProtectedOffice>
    )
}
export default OfficeMain