import React, { useState } from 'react';
import UseSlider from '../../../context/useSlider';
import '../../css/tailwind.css';
export default function Slider() {
    const [count, setCount] = useState(0);
    const photo = UseSlider(count);
    const handleLeft = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(3);
        }
    }

    const handleRight = () => {
        setCount(count + 1);
        if (count >= 3) {
            setCount(0);
        }
    }
    return (
        <div className='flex w-full bg-gray-50 px-4 '>
            <div className="container flex mx-auto items-center">
                <button onClick={handleLeft} className='transform translate-x-10'><i className='fas fa-arrow-left'></i></button>
                <img className='lg:w-full w-11/12  px-1 ' src={photo.img} alt={`slider img ${photo.img}`} />
                <button onClick={handleRight} className='transform -translate-x-10'><i className='fas fa-arrow-right'></i></button>
            </div>
        </div>
    )
}
