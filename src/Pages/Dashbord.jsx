import React, { useState } from 'react';
import Heading from '../Shared/Heading';
import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
    const [activeBtn, setActiveBtn] = useState('cart');
    const handleActive = (type)=>{
        if(type === 'cart'){
            setActiveBtn(type)
        }
        else if(type === 'wishlist'){
            setActiveBtn(type)
        }
        
    }
    
    return (
        <div>
            <div className='bg-[#9538E2] py-7'>
                <Heading title={'Dashbord'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                <div className='flex flex-row justify-center items-center gap-5 pt-10 pb-3'>
                    <NavLink onClick={()=>handleActive('cart')} to={'/dashbord'}><button className={`btn btn-outline border-white font-bold hover:text-[#9538E2] text-lg rounded-full md:px-12 ${activeBtn === "cart" ? 'bg-white text-[#9538E2]': 'text-white'} `}>Cart</button></NavLink>

                    <NavLink onClick={()=>handleActive('wishlist')} to={'/dashbord/wishlist'} ><button className={` ${activeBtn === 'wishlist' ? 'bg-white text-[#9538E2]': 'text-white'} btn btn-outline border-white font-bold hover:text-[#9538E2] text-lg rounded-full md:px-12`}>WishList</button></NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;