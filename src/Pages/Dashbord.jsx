import React from 'react';
import Heading from '../Shared/Heading';
import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
    
    return (
        <div>
            <div className='bg-[#9538E2] py-7'>
                <Heading title={'Dashbord'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                <div className='flex flex-row justify-center items-center gap-5 pt-10 pb-3'>
                    <NavLink to={'/dashbord'}><button className='btn btn-outline border-white text-white font-bold hover:text-[#9538E2] text-lg rounded-full md:px-12'>Cart</button></NavLink>
                    <NavLink to={'/dashbord/wishlist'} ><button className='btn btn-outline border-white text-white font-bold hover:text-[#9538E2] text-lg rounded-full md:px-12'>WishList</button></NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;