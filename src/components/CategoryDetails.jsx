import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Shared/Heading';
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import {  saveCategoryCartByLocalStorage, saveWishlistByLC } from '../Utils/Utils';



const CategoryDetails = () => {
    const [categoryDetail, setCategoryDetail] = useState([]);
    const { id } = useParams()
    const categoriesData = useLoaderData();

    useEffect(() => {
        const findCategory = [...categoriesData].find(category => parseInt(category.id) === parseInt(id));
        setCategoryDetail(findCategory)
    }, [id, categoriesData])


    const handleCategoryCart = (categoryDetail) =>{
        saveCategoryCartByLocalStorage(categoryDetail)
    }
    
    const handleWishlist = (categoryDetail) =>{
        saveWishlistByLC(categoryDetail)
    }

    const { product_title, product_image, price, description, specification } = categoryDetail || {};
    return (

        <div className=' min-h-svh bg-gray-200'>
            <div className='bg-[#9538E2] pt-10 pb-36'>
                <Heading title={'Product Details'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
            </div>
            <div className='grid grid-cols-12 gap-8 bg-white px-6 py-16  rounded-xl w-11/12 mx-auto -translate-y-28'>

                <div className='col-span-12 md:col-span-4'>
                    <img className='object-cover h-full w-full' src={product_image} alt="" />
                </div>

                <div className='col-span-12 md:col-span-8'>
                    <div className="space-y-3">
                        <h2 className="text-xl md:text-3xl font-semibold mt-4">{product_title}</h2>
                        <p className="text-xl md:text-lg font-bold text-gray-900">Price: ${price}</p>
                        <span className="inline-block bg-green-100 text-green-700 border border-green-700 px-3 py-1 text-sm rounded-full mt-2">
                            In Stock
                        </span>
                        <p className="text-gray-600 mt-2">{description}</p>
                        <div className="mt-4">
                            <h3 className="font-bold">Specification:</h3>
                            <ul className="list-decimal list-inside text-gray-700 text-sm mt-1">
                                {
                                    specification?.map((specif, idx) => <li key={idx}> {specif}</li>)
                                }
                            </ul>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="font-semibold">Rating:</span>
                            <span className="ml-2 text-gray-700 text-sm">4.8</span>
                        </div>
                        <div className='flex gap-5 items-center pt-5'>
                            <button onClick={()=> handleCategoryCart(categoryDetail)} className='btn btn-outline rounded-full hover:bg-[#9538E2]  hover:text-white'><span>Add To Cart</span> <PiShoppingCartSimple size={20} /></button>
                            <div onClick={()=> handleWishlist(categoryDetail)} className='p-2 border border-gray-400 hover:border-gray-600 rounded-full hover:bg-gray-200 cursor-pointer'>
                                <CiHeart size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryDetails;