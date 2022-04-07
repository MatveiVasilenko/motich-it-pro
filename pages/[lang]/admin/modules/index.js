import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import { NET } from './../../../../network';
import Admin from './../../../../layouts/admin/Admin';
import AdminModulesView from './../../../../views/admin/modules/AdminModulesView';
import ProtectedAdmin from './../../../../global/decorators/ProtectedAdmin';

const AdminModules = ({
    modules, 
    subcourses
}) => {
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminModulesView 
                    modules={modules}
                    subcourses={subcourses}
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

    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };
    const resSub = await fetch(
        `${NET.BACK_URL}/courses?id=${query.id}`,
        headers,
    );
    const subcourses = await resSub.json()
    const res = await fetch(
        `${NET.BACK_URL}/modules?id=${query.course_id}`,
        headers,
    );
    const modules = await res.json()

    return {
      props: {
        modules,
        subcourses
      } // will be passed to the page component as props
    }
  }

export default AdminModules
