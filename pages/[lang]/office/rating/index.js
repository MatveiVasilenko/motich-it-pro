import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import Office from '../../../../layouts/office/Office'
import { DATA } from '../../../../project/data';
import RatingView from '../../../../views/office/rating/RatingView';
import { NET } from './../../../../network';

const OfficeRating = ({
    users
}) => {
    console.log(users)
    return (
        <ProtectedOffice>
            <Office
                bgLight={true}
            >
                <RatingView 
                    users={users}
                />
            </Office>
        </ProtectedOffice>
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
        `${NET.BACK_URL}/mion/users_rating?companies_id=${DATA.companies_id}`,
        headers,
    );
    const users = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        users
      } // will be passed to the page component as props
    }
  }

export default OfficeRating
