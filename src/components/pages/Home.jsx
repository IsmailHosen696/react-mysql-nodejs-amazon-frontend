import React, { useEffect } from 'react'
import Box from './home/Box';
import Footer from './home/Footer';
import Nav from './home/Nav';
import ProductSlider from './home/ProductSlider';
import ProductSlider2 from './home/ProductSlider2';
import Productype from './home/productype';
import Slider from './home/Slider';

export default function Home() {

    useEffect(() => {
        document.title = 'Home';
    });

    return (
        <div className='bg-gray-50' style={{ fontFamily: "'Poppins',sans-serif" }}>
            <Nav />
            <Slider />
            <Box />
            <ProductSlider2 />
            <ProductSlider />
            <Productype />
            <Footer />
        </div>
    )
}
