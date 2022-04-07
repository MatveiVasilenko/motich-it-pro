import React, {
    useEffect
} from 'react';
import { useRouter } from 'next/router';
import { DATA } from '../../project/data';

const ProtectedAdmin = ({
    children
}) => {
    const router = useRouter()
    useEffect(() => {
        const adminToken = localStorage.getItem('adminToken');
        if (adminToken) {
            if (adminToken != DATA.password) {
                router.push('/ru/admin')
            }
        } else {
            router.push('/ru/admin')
        }
    }, [])
    
    return (
        <div>
            {children}
        </div>
    )
}
export default ProtectedAdmin