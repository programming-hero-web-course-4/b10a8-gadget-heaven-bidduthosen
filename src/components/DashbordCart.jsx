import React, { useEffect, useState } from 'react';
import { getCategoryStoredByLocalStorage, removeCartItemLC, removeCategoryCartByLocalStorage } from '../Utils/Utils';
import DashbordItem from './DashbordItem';

const DashbordCart = () => {
    const [savedCarts, setSavedCarts] = useState([]);
    useEffect(() => {
        const storedCartsLc = getCategoryStoredByLocalStorage()
        setSavedCarts(storedCartsLc)
    }, [])


    const handleRemoveCart = (storedCart) => {
        removeCategoryCartByLocalStorage(storedCart)
        const remainCartLc = getCategoryStoredByLocalStorage()
        setSavedCarts(remainCartLc)
    };

    const sortByPrice = () => {
        const storedCartsLc = getCategoryStoredByLocalStorage()
        const desanding = storedCartsLc.sort((a, b) => b.price - a.price);
        setSavedCarts(desanding)
    };

    const handleRemoveAllCart = ()=>{
        removeCartItemLC();
        const remainCartLc = getCategoryStoredByLocalStorage()
        setSavedCarts(remainCartLc)

    }


    return (
        <div>
            <div className='md:flex justify-between py-10'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                <div className='flex gap-5 items-center'>
                    <h3 className='font-semibold md:text-2xl'>Total cost: 999.99</h3>
                    <button onClick={() => sortByPrice()} className='btn btn-outline btn-secondary'>Sort by Price</button>
                    <button onClick={()=> handleRemoveAllCart()} className='btn btn-outline btn-secondary'>Purchase</button>
                </div>
            </div>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    savedCarts?.map(storedCart => <DashbordItem
                        key={storedCart.id}
                        storedCart={storedCart}
                        handleRemoveCart={handleRemoveCart}
                    ></DashbordItem>)
                }
            </div>
        </div>
    );
};

export default DashbordCart;