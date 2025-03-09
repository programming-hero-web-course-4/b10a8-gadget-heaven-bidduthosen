import React from 'react';
import { getCategoryStoredByLocalStorage } from '../Utils/Utils';
import DashbordItem from './DashbordItem';

const DashbordCart = () => {
    const storedCartsLc = getCategoryStoredByLocalStorage()
    console.log(storedCartsLc)
    return (
        <div>
            <div className='md:flex justify-between py-10'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                <div className='flex gap-5 items-center'>
                    <h3 className='font-semibold md:text-2xl'>Total cost: 999.99</h3> 
                    <button className='btn btn-outline btn-secondary'>Sort by Price</button> 
                    <button className='btn btn-outline btn-secondary'>Purchase</button> 
                </div>
            </div>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    storedCartsLc?.map(storedCart => <DashbordItem key={storedCart.id} storedCart={storedCart}></DashbordItem>)
                }
            </div>
        </div>
    );
};

export default DashbordCart;