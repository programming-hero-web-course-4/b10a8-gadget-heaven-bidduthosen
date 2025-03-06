import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Nav = () => {
    const [isActive, setIsActive] = useState('home');
    const handleIsACtive = (type) => {
        if (type === 'home') {
            setIsActive(type)
        } else if (type === 'dashbord') {
            setIsActive(type)
        }
        else if (type === 'statistics') {
            setIsActive(type)
        }
    }

    const links = <>
        <li onClick={() => handleIsACtive('home')} className={`${isActive === 'home' && 'underline text-amber-300'}`}> <Link to={'/'}>Home</Link></li>
        <li onClick={() => handleIsACtive('dashbord')} className={`${isActive === 'dashbord' && 'underline text-amber-300'}`}><Link to={'/dashbord'}>Dashbord</Link></li>
        <li onClick={() => handleIsACtive('statistics')} className={`${isActive === 'statistics' && 'underline text-amber-300'}`}><Link to={'/dashbord'}>Statistics</Link></li>
    </>
    return (
        <div className='max-w-screen-2xl mx-auto px-2 md:px-12'>
            <div className="navbar px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 h-svh ">
                            {links}

                        </ul>
                    </div>
                    <h2 className='text-2xl font-bold text-white'>Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <div className='bg-white p-2 rounded-full cursor-pointer'><CiShoppingCart size={20} /></div>
                    <div className='bg-white p-2 rounded-full cursor-pointer'><FaRegHeart size={20} /></div>
                </div>
            </div>
        </div>
    );
};

export default Nav;