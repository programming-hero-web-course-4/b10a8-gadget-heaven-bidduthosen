import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='text-center space-y-3 text-white md:w-6/12 mx-auto'>
            <h2 className="font-bold text-4xl">{title}</h2>
            <p className='font-light text-gray-300'>{subTitle}</p>
        </div>
    );
};

export default Heading;