import React from 'react';
import Banner from '../components/Banner';
import Gadgets from '../components/Gadgets';

const Home = () => {
    return (
        <div >
            <div className='md:min-h-[calc(100svh-100px)] mb-52'>
                <Banner></Banner>

            </div>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;