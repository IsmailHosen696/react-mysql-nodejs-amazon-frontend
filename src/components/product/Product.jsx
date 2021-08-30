import React, { useEffect, useState } from 'react'
import { useUpload } from '../../context/uploadcontext';

export default function Product() {
    const [fetchData, setFetchData] = useState([]);
    const { allproducts } = useUpload();
    useEffect(() => {
        async function wait() {
            await allproducts().then(data => {
                setFetchData(data)
            });
            console.log(fetchData.data.map(data => data));
        }
        wait();
    })
    return (
        <div>
            {/* {
                fetchData.map(data => (
                    <div key={data.id}>
                        <img src={data.productimg} alt="a" />
                    </div>
                ))
            } */}
        </div>
    )
}
