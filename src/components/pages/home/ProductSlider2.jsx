import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/box.css';

export default function ProductSlider2() {
    return (
        <div className='productslider'>
            <div className="productslider_container">
                <div className="product_heaing">
                    <p>
                        Up to 70% off | Like-new products
                    </p>
                    <Link to='/allproducts' className='text-blue'>See all offers</Link>
                </div>

                <div className="product_overflow">
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41Q6QY85qlL._AC_SY200_.jpg" alt="tws" />
                        <h2>$49.00 - $99.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/31OzgzfIAPS._AC_SY200_.jpg" alt="tws" />
                        <h2>$9.00 - $89.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/31QEfiXEbvL._AC_SY200_.jpg" alt="tws" />
                        <h2>$209.00 - $299.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41VYHWF7ZZS._AC_SY200_.jpg" alt="tws" />
                        <h2>$49.00 - $99.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41SiEffOhmL._AC_SY200_.jpg" alt="tws" />
                        <h2>$49.00 - $99.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://m.media-amazon.com/images/I/41PQZ2jkZwL._AC_SY200_.jpg" alt="tws" />
                        <h2>$49.00 - $99.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://images-eu.ssl-images-amazon.com/images/I/71Il6F6rgcS._AC_UL160_SR160,160_.jpg" alt="tws" />
                        <h2>$29.00 - $69.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://images-eu.ssl-images-amazon.com/images/I/411oQmfMQaL._AC_UL160_SR160,160_.jpg" alt="tws" />
                        <h2>$49.00 - $99.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://images-eu.ssl-images-amazon.com/images/I/71dwvdUu72L._AC_UL160_SR160,160_.jpg" alt="tws" />
                        <h2>$649.00 - $899.00</h2>
                    </div>
                    <div className="img_overflow_cont">
                        <img className='img_overflow' src="https://images-eu.ssl-images-amazon.com/images/I/71gD8WdSlaL._AC_UL160_SR160,160_.jpg" alt="tws" />
                        <h2>$1109.00 - $1499.00</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
