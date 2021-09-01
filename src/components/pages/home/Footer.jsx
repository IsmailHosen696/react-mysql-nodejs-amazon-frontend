import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/tailwind.css';
import * as Scroll from 'react-scroll';
let scroll = Scroll.animateScroll;
export default function Footer() {
    function scrolltotop() {
        scroll.scrollToTop();
    }
    return (
        <div className='flex w-full flex-col'>
            <Link onClick={scrolltotop} to='#top' className='capitalize px-2 text-center py-3 text-white w-full text-xs bg-gray-700'>back to top</Link>
            <div className="w-full bg-gray-800 py-5">
                <div className="container mx-auto p-4 flex justify-evenly px-5 py-5 flex-wrap">
                    <ul className='flex flex-col sm:w-60 w-40'>
                        <li className='text-white text-md font-semibold py-2'>Get to Know Us</li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">About Us</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Careers</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Press Releases</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Amazon Cares</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Gift a Smile</Link></li>
                    </ul>
                    <ul className='flex flex-col sm:w-60 w-40'>
                        <li className='text-white text-md font-semibold py-2'>Connect with Us</li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Facebook</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Twitter</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Instagram</Link></li>
                    </ul>
                    <ul className='flex flex-col sm:w-60 w-40'>
                        <li className='text-white text-md font-semibold py-2'>Make Money with Us</li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Sell on Amazon</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Sell under Amazon Accelerator</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Amazon Global Selling</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Become an Affiliate</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Fulfilment by Amazon</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Advertise Your Products</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Amazon Pay on Merchants</Link></li>
                    </ul>
                    <ul className='flex flex-col sm:w-60 w-40'>
                        <li className='text-white text-md font-semibold py-2'>Let Us Help You</li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">COVID-19 and Amazon</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Your Account</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Returns Centre</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">100% Purchase Protection</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Amazon App Download</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Amazon Assistant Download</Link></li>
                        <li className='py-1 text-gray-300 hover:underline transition-all duration-200 text-xs' ><Link to="#">Help</Link></li>
                    </ul>
                </div>
                <div className="border-t border-gray-600 my-5">
                    <div className="container flex flex-col mt-2 mx-auto items-center">
                        <div className="w-20 my-2">
                            <Link to='#'>
                                <img src="https://www.startech.com.bd/image/catalog/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center px-5 lg:px-48">
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Australia
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Brazil
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Canada
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                China
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                France
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Germany
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Italy
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Japan
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Mexico
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Netherlands
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Poland
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Singapore
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Spain
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                Turkey
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                United Arab Emirates
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                United Kingdom
                            </Link>
                            <Link to='#' className='hover:underline text-white px-2 py-2 text-xs'>
                                United States
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 py-2">
                <div className="container flex mx-auto justify-center">
                    <div className="flex flex-wrap lg:px-28 px-5 py-5">
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                AbeBooks <br />
                            </span>
                            Books, art <br />
                            & collectibles</Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Amazon Web Services <br />
                            </span>
                            Scalable Cloud <br />
                            Computing Services
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Audible <br />
                            </span>
                            Download<br />
                            Audio Books
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                DPReview <br />
                            </span>
                            Digital<br />
                            Photography
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                IMDb <br />
                            </span>
                            Movies, TV<br />
                            & Celebrities
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Shopbop<br />
                            </span>
                            Designer<br />
                            Fashion Brands
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Amazon Business <br />
                            </span>
                            Everything For<br />
                            Your Business
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Prime Now<br />
                            </span>
                            2-Hour Delivery<br />
                            on Everyday Items
                        </Link>
                        <Link to='#' className='py-2 text-gray-300 px-5 text-xs hover:underline font-light md:w-64 w-32'>
                            <span className='text-md font-medium text-gray-200 '>
                                Amazon Prime Music<br />
                            </span>
                            75 million songs, ad-free<br />
                            Over 10 million podcast episodes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
