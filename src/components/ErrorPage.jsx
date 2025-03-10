import React from 'react';
import { Link } from 'react-router-dom';
import imgError from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className='md:min-h-screen flex flex-col justify-center items-center space-y-7'>
            <img className='md:h-[310px]' src={imgError} alt="" />
            <h1 className='font-bold text-2xl text-red-400'>Error Page!!</h1>
            <Link to={"/"}><button className='btn btn-outline'>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;