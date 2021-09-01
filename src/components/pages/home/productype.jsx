import React from 'react'
import '../../css/tailwind.css'
export default function Productype() {
    return (
        <div className='w-full flex my-4 mt-10' style={{ fontFamily: "'Nunito',sans-serif" }}>
            <div className="container mx-auto flex flex-col">
                <div className="flex flex-col">
                    <h1 className='text-center font-bold text-xl py-2'>Featured Category</h1>
                    <p className='text-center py-1'>Get Your Desired Product from Featured Category!</p>
                </div>
                <div className="flex justify-center flex-wrap mx-auto" style={{ maxWidth: "700px" }}>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>All Laptop</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>iMac</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>Smart Watch</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>Headphone</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/keyboard-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>Keyboard & Mouce</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>Routers</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>Monitors</h1>
                    </div>
                    <div className="flex cursor-pointer flex-col w-40 bg-white shadow h-32 justify-center items-center m-1 rounded-lg">
                        <img className='w-12' src="https://www.startech.com.bd/image/cache/catalog/category-thumb/SSD-48x48.png" alt="laptop" />
                        <h1 className='py-2 px-1 cursor-pointer hover:text-yellow-600 font-semibold text-sm'>iPads</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
