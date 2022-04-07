import React from 'react'
import { NET } from '../../../../../network';
import ProtectedAdmin from '../../../../../global/decorators/ProtectedAdmin';
import Admin from '../../../../../layouts/admin/Admin';
import AdminAnswersLispView from '../../../../../views/admin/hometasks/AdminAnswersLispView';

const AdminHometaskItem = ({
    answers
}) => {
    return (
        <ProtectedAdmin>
            <Admin>
                <AdminAnswersLispView 
                    answers={answers}
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
        `${NET.BACK_URL}/mion/hometask?course_id=${params.id}`,
        headers,
    );
    const hometask = await res.json()
    let answers = false;
    if (hometask?.data?.data.length) {
        const resAnswer = await fetch(
            `${NET.BACK_URL}/mion/answertask/${hometask.data.data[0].id}`,
            headers,
        );
        answers = await resAnswer.json()
    }
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        answers
      } // will be passed to the page component as props
    }
  }

export default AdminHometaskItem
