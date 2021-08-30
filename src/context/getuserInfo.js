import { useEffect, useState } from 'react'
import axios from 'axios'
export default function UserInfo(token) {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        getuserinfo(token);
        async function getuserinfo(authtoken) {
            await axios.get('http://localhost:3001', { headers: { Authorizations: authtoken } }).then(data => {
                setUserInfo(data.data);
                console.log(data);
            });
        }
    }, [token])
    return userInfo;
}
