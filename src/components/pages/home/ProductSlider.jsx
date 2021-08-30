import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/box.css';

export default function ProductSlider() {
    return (
        <div className='productslider mt-5'>
            <div className="productslider_container">
                <div className="product_heaing">
                    <p>
                        Today’s Deals See
                    </p>
                    <Link to='/allproducts' className='text-blue'>All deals</Link>
                </div>

                <div className="product_overflow">
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41Q6G7gUzBL._AC_SY200_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41c7bJo7ooL._AC_SY200_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/51xynMOM+AL._AC_SY200_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow object-contain' src="https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_UY218_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/51LWdRK+wGS._AC_SY200_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow object-contain' src="https://m.media-amazon.com/images/I/41j0b60I5+L._AC_UY218_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow object-contain' src="https://m.media-amazon.com/images/I/31swmrdF8kL._AC_SY200_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow object-contain' src="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/91kyFAv3QQL._SL1500_.jpg" alt="tws" />
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41JTbcvI6mL._SL1024_.jpg" alt="tws" />
                    </div>
                </div>
            </div>
        </div>
    )
}
