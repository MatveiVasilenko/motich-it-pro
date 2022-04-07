import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import Office from '../../../../layouts/office/Office'
import CompaniesView from '../../../../views/office/companies/CompaniesView';
import { NET } from './../../../../network';

const OfficeCompanies = ({
    courses
}) => {
    // console.log(courses)
    return (
        <ProtectedOffice>
            <Office>
                <CompaniesView />
            </Office>
        </ProtectedOffice>
    )
}

export default OfficeCompanies
