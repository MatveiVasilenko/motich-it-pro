import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import Office from '../../../../layouts/office/Office'
import { NET } from './../../../../network';
import RefferalView from './../../../../views/office/refferals/RefferalView';

const OfficeCourses = ({
    courses
}) => {
    // console.log(courses)
    return (
        <ProtectedOffice>
            <Office>
                <RefferalView 
                    courses={courses}
                />
            </Office>
        </ProtectedOffice>
    )
}

export default OfficeCourses
