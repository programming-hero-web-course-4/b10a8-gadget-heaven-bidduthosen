import React from 'react';
import { CiCircleRemove } from "react-icons/ci";


const DashbordItem = ({ storedCart, wishlist }) => {
    const { product_title, product_image, price, description, specification } = storedCart || {};
    return (
        <div className='grid grid-cols-12 gap-3 border-2 border-gray-300  p-4 rounded-lg'>
            <div className="col-span-12 lg:col-span-3 ">
                <img className='md:h-36 md:w-full md:object-cover p-3' src={product_image} alt="" />
            </div>
            <div className="col-span-10 lg:col-span-7 flex justify-center flex-col ">
                <h2 className='font-bold text-xl'>{product_title}</h2>
                <p className='font-light text-sm'>{description}</p>
                <h4 className='font-semibold text-base'>Price: #{price}</h4>
            </div>
            <div className="col-span-2 flex justify-center items-center">
                <CiCircleRemove size={40}  className='text-red-400 hover:text-red-700 cursor-pointer'/>

            </div>
        </div>
    );
};

export default DashbordItem;