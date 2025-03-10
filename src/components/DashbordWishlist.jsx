import React, { useEffect, useState } from 'react';
import { getWishlistStoredByLC, removeWishlistByLC } from '../Utils/Utils';
import DashbordItem from './DashbordItem';

const DashbordWishlist = () => {
    const [savedWishlist, setSavedWishlist] = useState([]);
    useEffect(() => {
        const storedWishlist = getWishlistStoredByLC()
        setSavedWishlist(storedWishlist)
    }, [])


    const handleRemoveCart = (wishlist) => {
        removeWishlistByLC(wishlist)
        const storedWishlist = getWishlistStoredByLC()
        setSavedWishlist(storedWishlist)
    };

    return (
        <div>
            <div className=' py-10'>
                <h2 className='font-bold text-2xl'>wishlist</h2>
            </div>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    savedWishlist?.map(storedCart => <DashbordItem
                        key={storedCart.id}
                        storedCart={storedCart}
                        handleRemoveCart={handleRemoveCart}
                    ></DashbordItem>)
                }
            </div>
        </div>
    );
};

export default DashbordWishlist;