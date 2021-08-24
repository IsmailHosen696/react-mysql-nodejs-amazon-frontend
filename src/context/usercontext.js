import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const UserContexts = createContext();
export const useUserContext = () => {
    return useContext(UserContexts);
}

export function UserProvider({ children }) {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    useEffect(() => {
        if (token) {
            token && axios.get('http://localhost:3001/admin/user/all', { headers: { token } }).then(users => {
                setData(users.data)
            }).catch(err => console.log(err));
        } else {
            history.push('/signin')
        }
    });
    const loggedinuser = data.user;
    const alluserforadmin = data.result;

    const value = {
        loggedinuser,
        alluserforadmin
    }
    return (
        <UserContexts.Provider value={value}>
            {children}
        </UserContexts.Provider>
    )
}