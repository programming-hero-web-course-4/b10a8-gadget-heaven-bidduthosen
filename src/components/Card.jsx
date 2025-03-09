import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ category }) => {
    const {id, product_title, product_image, price } = category || {};
    return (
        <div className=' rounded-lg'>
            <div className="card md:h-[335px] lg:h-[370px]">
                <div className="card-details">
                    <img className='md:h-44 rounded-3xl mb-6 object-cover w-full' src={product_image} alt="" />
                    <h1 className='font-semibold text-2xl'>{product_title}</h1>
                    <h4 className='font-medium text-base text-gray-500'>Price: {price}</h4>
                </div>
                <Link to={`/categoryDetials/${id}`}><button className="btn btn-outline rounded-3xl card-button">View Details</button></Link>
            </div>
        </div>
    );
};

export default Card;