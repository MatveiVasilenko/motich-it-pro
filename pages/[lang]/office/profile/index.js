import React from 'react'
import Office from '../../../../layouts/office/Office'
import ProtectedOffice from './../../../../global/decorators/ProtectedOffice';
import ProfileView from './../../../../views/office/profile/ProfileView';

const OfficeProfile = () => {
    return (
        <ProtectedOffice>
            <Office>
                <ProfileView />
            </Office>
        </ProtectedOffice>
    )
}
export default OfficeProfile