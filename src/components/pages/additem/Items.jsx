import React, { useEffect, useState } from 'react'
import { useUpload } from '../../../context/uploadcontext';
import '../../css/tailwind.css';
import Spinner from '../home/Spinner';

export default function Items() {
    const [imagepreview, setImagepreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [error, setError] = useState('');
    const [productType, setProductType] = useState('');
    const [productFeatures, setProductFeatures] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { test } = useUpload();

    useEffect(() => {
        if (!selectedFile) {
            setImagepreview(null)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setImagepreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const handlePhotourl = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            return;
        }
        setSelectedFile(e.target.files[0]);
    }
    const removepreview = () => {
        setSelectedFile(null);
        setImagepreview(null)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('')
        setError('');
        if (!productName || !productPrice || !productDescription || !productType || !productFeatures || productName === undefined || productPrice === undefined || productDescription === undefined || !selectedFile || selectedFile === null) {
            return setError('All fields are required')
        }
        if (productName.length < 8) {
            return setError('Product name must grater than 8 charecture')
        }
        if (productDescription.length < 50) {
            return setError('Product description must grater than 50 charecture')
        }
        if (productFeatures.length < 50) {
            return setError('Product Features must grater than 50 charecture')
        }
        if (selectedFile.type.split('/')[0] === 'video') {
            return setError('image type not allowed')
        }
        try {
            setLoading(true);
            await test(productName, productPrice, productDescription, productFeatures, selectedFile, productType).then(data => {
                setMessage('item added');
                setImagepreview(null);
                setProductDescription('');
                setProductName('');
                setProductPrice('');
                setProductType('');
                setProductFeatures('')
                setSelectedFile(null);
            });
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
        setLoading(false);
    }
    return (
        <div className='w-full flex mt-5' style={{ fontFamily: "'Poppins',sans-serif" }}>
            <div className="container px-5 mx-auto flex-col flex">
                <h1 className='text-center text-lg'>Add New Product</h1>
                <div className="flex rounded flex-col xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-10/12 w-full mx-auto mt-5 px-4 py-5 border">
                    {message && <p className='text-green-400 text-center py-2 text-sm font-normal'>{message}</p>}
                    {error && <p className='text-red-500 text-center py-2 text-sm font-normal'>{error}</p>}
                    <form className='py-2' onSubmit={handleSubmit}>
                        <div className="flex flex-col px-1 py-4">
                            <label htmlFor="productname" className='text-sm'>Product Name</label>
                            <input autoComplete='off' value={productName || ''} onChange={e => setProductName(e.target.value)} type="text" className='py-1 px-5 rounded mt-2 outline-none border h-10' id="productname" />
                        </div>
                        <div className="flex flex-col px-1 py-4">
                            <label className='text-sm' htmlFor="productprice">Product Price</label>
                            <input autoComplete='off' value={productPrice || ''} onChange={e => setProductPrice(Number(e.target.value))} type="number" id="productprice" className='py-1 px-5 rounded mt-2 outline-none border h-10' />
                        </div>
                        <div className="flex flex-col px-1 py-4">
                            <label className='text-sm' htmlFor="productype">Product Type</label>
                            <input autoComplete='off' value={productType || ''} onChange={e => setProductType((e.target.value).toLocaleLowerCase())} type="text" id="productype" className='py-1 px-5 rounded mt-2 outline-none border h-10' />
                        </div>
                        <div className="flex flex-col px-1 py-4">
                            <label className='text-sm' htmlFor="productfet">Product Features</label>
                            <textarea autoComplete='off' type="text" value={productFeatures || ''} onChange={e => setProductFeatures(e.target.value)} id="productfet" className='py-2 px-5 rounded mt-2 outline-none border h-28 resize-none leading-7' ></textarea>
                        </div>
                        <div className="flex flex-col px-1 py-4">
                            <label className='text-sm' htmlFor="productdesc">Product Description</label>
                            <textarea autoComplete='off' type="text" value={productDescription || ''} onChange={e => setProductDescription(e.target.value)} id="productdesc" className='py-2 px-5 rounded mt-2 outline-none border h-28 resize-none leading-7' ></textarea>
                        </div>
                        <div className="flex my-2 flex-col px-1 py-4">
                            <label className='text-sm items-center flex' htmlFor="productimg">
                                Add item Image
                                <div className="flex justify-center items-center rounded w-16 h-7 cursor-pointer text-gray-800">
                                    <i className='fas fa-plus'></i>
                                    <input type="file" onChange={handlePhotourl} id="productimg" className='py-1 px-5 rounded mt-2 outline-none border h-10 hidden' />
                                </div>
                            </label>
                            <button disabled={loading} className={loading ? 'w-36 my-2 mb-5 text-sm font-light rounded bg-gray-600 text-white capitalize mx-1 py-2' : 'w-36 my-2 mb-5 text-sm font-light rounded bg-gray-800 text-white capitalize mx-1 py-2'}>Add</button>
                            {selectedFile && (
                                <div className='relative mt-5'>
                                    <button type='button' onClick={removepreview} className='fas text-red-500 fa-times cursor-pointer absolute right-0 -top-5'>
                                    </button>
                                    <img className='w-full object-cover my-2' src={imagepreview} alt='selectedimage' />
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            {loading && <Spinner />}
        </div>
    )
}
