import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Footer from '../pages/home/Footer';
import '../css/product.css';
import { useUpload } from '../../context/uploadcontext';

export default function Product() {
    const [fetchData, setFetchData] = useState([]);
    const { getproduct } = useUpload();
    const [sortBy, setSortBy] = useState('default');
    useEffect(() => {
        getproduct(sortBy).then(data => setFetchData(data))
    })
    return (
        <div className='products'>
            <div className='product-container'>
                <div className='product-heading'>
                    <h1>All Accecories</h1>
                    <div className='select-div'>
                        <label htmlFor="short">sort by :</label>
                        <select id='short' onChange={e => setSortBy(e.currentTarget.value)}>
                            <option defaultValue value="default">Default</option>
                            <option value="price-low-to-high">Price low to high</option>
                            <option value="price-high-to-low">Price high to low</option>
                        </select>
                    </div>
                </div>
                <div className='all-products'>
                    {fetchData && fetchData.length > 0 ?
                        fetchData.map(data => (
                            <div key={data.id} className='product'>
                                <img src={data.productimg} alt="a" />
                                <div className='product-text'>
                                    <Link to={`/product/${data.id}`}>{data.productname}</Link>
                                    <h2>{data.productprice} ৳</h2>
                                </div>
                                <div>
                                    <button><i className='fas fa-shopping-cart px-1'></i> add to cart</button>
                                </div>
                            </div>
                        )) :
                        <div className="flex flex-wrap justify-center">
                            <div className="flex flex-col m-1">
                                <Skeleton width={400} height={200} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                            </div>
                            <div className="flex flex-col m-1">
                                <Skeleton width={400} height={200} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                            </div>
                            <div className="flex flex-col m-1">
                                <Skeleton width={400} height={200} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                            </div>
                            <div className="flex flex-col m-1">
                                <Skeleton width={400} height={200} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                                <Skeleton width={400} height={20} duration={2} delay={5} count={1} />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
