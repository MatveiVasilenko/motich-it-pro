import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import { NET } from './../../../../network';
import Admin from './../../../../layouts/admin/Admin';
import ProtectedAdmin from './../../../../global/decorators/ProtectedAdmin';
import AdminUsersView from './../../../../views/admin/users/AdminUsersView';
import { DATA } from '../../../../project/data';

const AdminUsers = ({
    users
}) => {
    console.log(users)
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminUsersView 
                    users={users.data}
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
    const resUsers = await fetch(
        `${NET.BACK_URL}/mion/users?companies_id=${DATA.companies_id}`,
        headers,
    );
    const users = await resUsers.json()

    return {
      props: {
        users: JSON.parse(JSON.stringify(users))
      } // will be passed to the page component as props
    }
  }

export default AdminUsers
