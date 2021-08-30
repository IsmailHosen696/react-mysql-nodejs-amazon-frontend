import React, { useEffect, useState } from 'react'
import '../../css/tailwind.css';
import { Link, useHistory } from 'react-router-dom';
import UserInfo from '../../../context/getuserInfo';

export default function Nav() {
    const token = localStorage.getItem('token')
    const [loggedinUser, setLoggedinUser] = useState(null);
    const userInfo = UserInfo(token);
    const history = useHistory()
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.innerWidth > 1024 && setOpen(true)
        window.addEventListener('resize', resize)
        function resize(e) {
            window.innerWidth > 1024 ? setOpen(true) : setOpen(false)

        }
        setLoggedinUser(userInfo);
        return () => window.removeEventListener('resize', resize)
    }, [userInfo]);
    const handlesignout = e => {
        localStorage.removeItem('token');
        history.push('/')
    }
    return (
        <div id='top' className='w-full h-16 justify-center flex' style={{ fontFamily: "'Poppins', sans-serif", background: '#131921' }} >
            <div className="lg:container lg:px-4 w-full flex lg:justify-between justify-start items-center flex-col lg:flex-row">
                <div className="flex 2xl:px-5 justify-between items-center w-full lg:w-auto  mt-4 lg:mt-0">
                    <Link className='text-white px-4 text-xl font-semibold lowercase' to='/'>amazon</Link>
                    <button onClick={() => { setOpen(!open) }} className='lg:hidden flex px-4'><i className='fas fa-bars text-white'></i></button>
                </div>
                <div className={open ? "flex lg:flex lg:py-0 pb-2 pt-10 px-5 lg:w-6/12 lg:mt-0 mt-4 lg:bg-transparent lg:z-0 z-50 w-full lg:p-5" : 'hidden'} style={{ background: '#131921' }}>
                    <input type="text" placeholder='search' className='w-full tracking-wider px-4 text-xs h-8 outline-none' style={{ borderRadius: '3px 0 0 3px' }} />
                    <div style={{ borderRadius: ' 0 3px 3px 0', background: '#FEBD69' }} className="flex h-8 w-9 justify-center items-center cursor-pointer">
                        <i className='fas fa-search'></i>
                    </div>
                </div>
                <div className={open ? "flex lg:flex w-full lg:w-auto lg:p-0 p-4 lg:bg-transparent px-5 z-50" : "hidden"} style={{ background: '#131921' }}>
                    {loggedinUser && loggedinUser.auth ?
                        loggedinUser.user.role === 'admin' ?
                            <div className='lg:items-center items-start flex flex-col lg:flex-row lg:py-0 py-5'>
                                <Link to="#" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 text-md lg:text-xs'>Hello {loggedinUser.user.username}</Link>
                                <Link to="/admin/orders" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 lg:text-xs'>Admin Panel</Link>
                                <Link to="/add/items" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 lg:text-xs'>Add Products</Link>
                                <button className='lg:px-3 py-1 lg:text-xs lg:my-0 my-1 rounded text-red-500 capitalize font-medium cursor-pointer mx-1' onClick={handlesignout}>signout</button>
                            </div>
                            :
                            <div className='lg:items-center items-start flex flex-col lg:flex-row lg:py-0 py-5'>
                                <Link to="#" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 text-md lg:text-xs'>Hello {loggedinUser.user.username}</Link>
                                <Link to="/orders" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 lg:text-xs'>Orders</Link>
                                <Link to='/allproducts' className='text-gray-300 hover:text-gray-200 lg:px-2 font-light lg:text-xs lg:py-0 py-2'>All Products</Link>
                                <Link to="/cart" className='text-gray-300 hover:text-gray-200 font-light lg:py-0 py-2 lg:px-2 lg:text-xs'><i className='fas fa-shopping-cart'></i> Cart</Link>
                                <button className='lg:px-3 py-1 lg:text-xs lg:my-0 my-1 rounded text-red-500 capitalize cursor-pointer mx-1' onClick={handlesignout}>signout</button>
                            </div>
                        :
                        <>
                            <div className="flex flex-col lg:flex-row">
                                <Link to='/allproducts' className='text-gray-300 text-xs hover:text-gray-200 px-2 font-light lg:py-0 py-2'>All Products</Link>
                                <Link className='text-gray-300 hover:text-gray-200 text-xs px-2 font-light lg:py-0 py-2' to='/signin'>Signin</Link>
                                <Link className='text-gray-300 hover:text-gray-200 text-xs px-2 font-light lg:py-0 py-2' to='/signup'>Signup</Link>
                                <Link className='text-gray-300 hover:text-gray-200 text-xs px-2 font-light lg:py-0 py-2' to='/cart'><i className='fas fa-shopping-cart'></i> Cart</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >
    )
}
