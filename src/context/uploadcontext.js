import axios from 'axios';
import React from 'react'
import { storage } from '../firebase';

const uploadContext = React.createContext();
export const useUpload = () => {
    return React.useContext(uploadContext);
}

export default function UploadProvider({ children }) {
    const test = async (productName, productPrice, productDescription, productFeatures, selectedimage, type) => {
        function addtofirebasestorage(selectedimage) {
            const uploadtask = storage.ref(`/products/${selectedimage.name}`).put(selectedimage);
            return new Promise((resolve, reject) => {
                uploadtask.on('state_changed',
                    () => { },
                    (err) => {
                        reject(err.message)
                    },
                    () => {
                        storage.ref('/products').child(selectedimage.name).getDownloadURL().then(url => {
                            resolve(url);
                        }).catch(err => reject(err.message))
                    }
                )
            });
        }
        return addtofirebasestorage(selectedimage).then(async (url) => {
            await addtosqldb(productName, productPrice, productDescription, productFeatures, url, type).then(data => {
                return data;
            }).catch(err => err.message);
        });
        async function addtosqldb(productName, productPrice, productDescription, productFeatures, url) {
            return await axios.post('http://localhost:3001/products/add/products', { productName, productPrice, productDescription, productFeatures, url, type }).then(data => data).catch(err => err)
        }
    }
    const getproduct = async (sortBy) => {
        const data = await axios.get('http://localhost:3001/products/allproducts').then(data => (data.data))
        if (sortBy === 'price-low-to-high') {
            return (data.sort((a, b) => (a.productprice > b.productprice) ? 1 : -1));
        }
        else if (sortBy === 'price-high-to-low') {
            return (data.sort((a, b) => (a.productprice > b.productprice) ? -1 : 1));
        }
        return (data);
    }
    const value = {
        test,
        getproduct
    }
    return (
        <uploadContext.Provider value={value}>
            {children}
        </uploadContext.Provider>
    )
}
