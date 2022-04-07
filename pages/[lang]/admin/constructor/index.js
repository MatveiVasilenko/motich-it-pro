import React from 'react'
import { NET } from './../../../../network';
import Admin from './../../../../layouts/admin/Admin';
import { DATA } from '../../../../project/data';
import AdminConstructorView from '../../../../views/admin/constructor/AdminConstructorView';

const OfficeConstructor = ({
    company
}) => {
    const config = JSON.parse(company.data.config)
    return (
        <Admin>
            <AdminConstructorView 
                config={config}
            />
        </Admin>
    )
}

export async function getServerSideProps({req, params}) {
    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };

    const resCompany = await fetch(
      `${NET.BACK_URL}/company/${DATA.companies_id}`,
      headers,
    );
    const company = await resCompany.json()
  
    return {
      props: {
        company: JSON.parse(JSON.stringify(company))
      } // will be passed to the page component as props
    }
  }
  
export default OfficeConstructor
