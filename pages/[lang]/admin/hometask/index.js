import React from 'react'
import { NET } from '../../../../network';
import Admin from '../../../../layouts/admin/Admin';
import AdminCoursesView from '../../../../views/admin/courses/AdminCoursesView';
import ProtectedAdmin from '../../../../global/decorators/ProtectedAdmin';
import { DATA } from '../../../../project/data';
import AdminHometaskView from '../../../../views/admin/hometasks/AdminHometaskView';

const AdminCourses = ({
    courses
}) => {
    const [activeFilter, setActiveFilter] = React.useState(1)
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminHometaskView 
                    courses={courses}
                />
            </Admin>
        </ProtectedAdmin>
    )
}

export async function getServerSideProps({req, params, activeFilter}) {

    // const userToken = localStorage.getItem('userToken')
    // const {userToken, setUserToken, lang} = useContext(UserContext)
    // const cookies = cookie.parse(req?.headers?.cookie || '');
    // const userToken = cookies?.session_token;

    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };

    const res = await fetch(
        `${NET.BACK_URL}/courses?id=null&companies_id=${DATA.companies_id}`,
        headers,
    );
    const courses = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        courses
      } // will be passed to the page component as props
    }
  }

export default AdminCourses
