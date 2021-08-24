import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Signin() {
    const history = useHistory()
    const token = localStorage.getItem('token');
    useEffect(() => {
        document.title = 'signin';
        token && history.push('/')
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignin = async e => {
        e.preventDefault();
        setError('');
        setLoading(true)
        if (!email || !password) {
            setLoading(false);
            return setError('all fields are required');
        }
        if (password.length < 6) {
            setLoading(false);
            return setError('password must be greater than 6 character');
        } else {
            setLoading(true);
            try {
                await axios.post('http://localhost:3001/signin', { username: email, password: password }).then(data => {
                    if (data.data.auth) {
                        localStorage.setItem('token', `Bearer ${data.data.token}`);
                    } else {
                        localStorage.removeItem('token')
                        return setError(data.data.err);
                    }
                }).catch(err => setError(err));
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }
    }
    return (
        <div className='flex flex-col w-full justify-center items-center' style={{ fontFamily: "'Poppins',sans-serif" }}>
            <div className="container flex flex-col mx-auto mt-10">
                <h1 className='text-center text-2xl font-medium'>amazon</h1>
                <div className="rounded flex flex-col py-10 px-10 border border-gray-200 2xl:w-4/12 xl:w-5/12 lg:w-7/12 md:w-8/12 mx-auto mt-5">
                    <h1 className="text-xl text-center mb-2 font-semiblod">signin to continue</h1>
                    <p className='text-center text-red-500'>{error && error}</p>
                    <form onSubmit={handleSignin} className='flex flex-col'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="email">Email</label>
                            <input value={email || ''} onChange={e => setEmail(e.target.value)} className='outline-none border border-gray-200 my-2 px-3 h-10 rounded py-1' autoComplete='off' type="text" id="email" />
                        </div>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="password">Password</label>
                            <input value={password || ''} onChange={e => setPassword(e.target.value)} className='outline-none border border-gray-200 my-2 h-10 px-3 rounded py-1' type="password" id="password" />
                        </div>
                        <button disabled={loading} className={loading ? 'h-10 mt-4 text-white bg-blue-200 cursor-not-allowed rounded' : 'h-10 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded'}>signin</button>
                    </form>
                    <div className='mt-3 flex items-center py-2'>
                        <p>Don't have an account ?</p>
                        <Link to='signup' className='pl-2 hover:underline hover:text-blue-500'>create one</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
