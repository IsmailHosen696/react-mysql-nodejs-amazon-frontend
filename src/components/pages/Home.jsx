import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/usercontext';

export default function Home() {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const { loggedinuser } = useUserContext();

    useEffect(() => {
        document.title = 'Home'
        if (token) {
            return null;
        } else {
            history.push('/signin');
        }
    });
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/signin')
    }
    return (
        <div>
            <p>{loggedinuser && loggedinuser.username}</p>
            <button onClick={handleLogout} className='bg-red-600 px-5 py-2 rounded text-white cursor-pointer'>logout</button>
        </div>
    )
}
