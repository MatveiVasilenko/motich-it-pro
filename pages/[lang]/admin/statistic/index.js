import React from 'react'
import { NET } from './../../../../network';
import Admin from './../../../../layouts/admin/Admin';
import ProtectedAdmin from './../../../../global/decorators/ProtectedAdmin';
import { DATA } from '../../../../project/data';
import AdminStatisticView from '../../../../views/admin/statistic/AdminStatisticView';

const AdminSubCourses = ({
    stats
}) => {
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminStatisticView 
                    stats={stats}
                />
            </Admin>
        </ProtectedAdmin>
    )
}

export async function getServerSideProps({req, params, query}) {

    // const userToken = localStorage.getItem('userToken')
    // const {userToken, setUserToken, lang} = useContext(UserContext)
    // const cookies = cookie.parse(req?.headers?.cookie || '');
    // const userToken = cookies?.session_token;
    // const id = query.id
    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };

    const resSub = await fetch(
        `${NET.BACK_URL}/statistic/?companies_id=${DATA.companies_id}`,
        headers,
    );
    const stats = await resSub.json()
    // const res = await fetch(
    //     `${NET.BACK_URL}/courses?id=null&companies_id=${DATA.companies_id}`,
    //     headers,
    // );
    // const courses = await res.json()
    
    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        // courses,
        stats
      } // will be passed to the page component as props
    }
  }

export default AdminSubCourses
