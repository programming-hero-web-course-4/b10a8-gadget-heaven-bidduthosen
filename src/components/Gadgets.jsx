import React from 'react';
import {  NavLink, Outlet, useLoaderData } from 'react-router-dom';

const Gadgets = () => {
    const gadgets = useLoaderData()
    return (
        <div className='md:py-28 pb-9'>
            <h1 className='font-bold text-xl md:text-4xl  text-center pb-10  md:py-24'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-12 md:col-span-3 flex flex-col gap-4 bg-gray-100 p-4  md:p-10 rounded-xl'>
                    {
                        gadgets.map(gadget=> <NavLink to={`/category/${gadget.category}`} className={({isActive})=>`border border-[#9538E2] ps-7 py-3 rounded-full hover:bg-[#9538E2] hover:text-white ease-in-out ${isActive ? 'bg-[#9538E2] text-white': ''}`} key={gadget?.id}>{gadget.category} </NavLink>)
                    }
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Gadgets;