import React from 'react'
import { NET } from '../../../../network';
import ProtectedAdmin from '../../../../global/decorators/ProtectedAdmin';
import Admin from '../../../../layouts/admin/Admin';
import AdminHometaskItemView from './../../../../views/admin/hometasks/AdminHometaskItemView';

const AdminHometaskItem = ({
    subcourses
}) => {
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminHometaskItemView
                    subcourses={subcourses}
                />
            </Admin>
        </ProtectedAdmin>
    )
}

export async function getServerSideProps({req, params}) {

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
        `${NET.BACK_URL}/courses/${params.id}?modules=1`,
        headers,
    );
    const subcourses = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        subcourses
      } // will be passed to the page component as props
    }
  }

export default AdminHometaskItem
