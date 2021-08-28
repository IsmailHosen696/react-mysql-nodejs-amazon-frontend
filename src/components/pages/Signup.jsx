import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../css/tailwind.css';


export default function Signup() {

    useEffect(() => {
        document.title = 'signup';
    });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        if (!username || !email || !password || !confirmPassword) {
            setLoading(false)
            return setError('all fields are required');
        }
        if (username.length < 4) {
            setLoading(false)
            return setError('username must be greater than 4 charecture');
        }
        if (password !== confirmPassword) {
            setLoading(false)
            return setError('password are not matching')
        }
        if (password.length < 6) {
            setLoading(false)
            return setError('password must be greater than 6 charecture');
        }
        try {
            setLoading(true);
            await axios.post('http://localhost:3001/signup', { username, email, password }).then(data => {
                if (data.data.auth) {
                    localStorage.setItem('token', `Bearer ${data.data.token}`);
                    history.push('/')
                } else {
                    setError(data.data.err)
                    localStorage.removeItem('token');
                }
            }).catch(err => setError(err.message));
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
        setLoading(false)
    }
    return (
        <div className='flex flex-col w-full justify-center items-center' style={{ fontFamily: "'Poppins',sans-serif" }}>
            <div className="container flex flex-col mx-auto mt-10">
                <h1 className='text-center text-2xl font-medium'>amazon</h1>
                <div className="rounded flex flex-col py-10 px-10 border border-gray-200 2xl:w-4/12 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-11/12 mx-auto mt-5">
                    <h1 className="text-xl mb-2 font-semiblod">Create Account</h1>
                    {error && <p className='text-center text-red-500'>{error}</p>}
                    <form onSubmit={handleSignup} className='flex flex-col'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="username">username</label>
                            <input value={username || ''} onChange={e => setUsername(e.target.value)} className='outline-none border border-gray-200 my-2 h-10 px-3 rounded py-2' autoComplete='off' type="text" id="username" />
                        </div>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="email">email</label>
                            <input value={email || ''} onChange={e => setEmail(e.target.value)} className='outline-none border border-gray-200 my-2 px-3 h-10 rounded py-2' autoComplete='off' type="email" id="email" />
                        </div>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="password">password</label>
                            <input value={password || ''} onChange={e => setPassword(e.target.value)} className='outline-none border border-gray-200 my-2 h-10 px-3 rounded py-2' type="password" id="password" />
                        </div>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="cpassword">confirm password</label>
                            <input value={confirmPassword || ''} onChange={e => setConfirmPassword(e.target.value)} className='outline-none border h-10 border-gray-200 my-2 px-3 rounded py-1' autoComplete='off' type="password" id="cpassword" />
                        </div>
                        <button disabled={loading} className={loading ? 'h-10 mt-4 text-white capitalize bg-blue-300 mb-2 rounded' : 'h-10 mt-4 text-white capitalize bg-gradient-to-t from-blue-500 to-blue-400 mb-2 rounded'}>create account</button>
                    </form>
                    <div className='mt-3 flex items-center'>
                        <p>Already have an account ?

                            <Link to='/signin' className='pl-2 hover:underline hover:text-blue-500'>signin</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
