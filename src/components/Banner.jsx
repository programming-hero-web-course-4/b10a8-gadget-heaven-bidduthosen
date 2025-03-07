import React from 'react';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-[#9538E2] rounded-b-lg py-14 px-4 flex justify-center items-center">
            <div className="container mx-auto relative flex flex-col items-center text-white text-center">
                {/* Text Section */}
                <div className=" md:mb-24">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="mb-4 text-white/70 text-sm">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!.</p>
                    <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Shop Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-9/12 flex justify-center relative mt-16 ">
                    <img 
                        src={bannerImg}
                        alt="Banner"
                        className=" md:h-[500px] w-full  object-cover absolute md:-bottom-32 -bottom-14 translate-y-1/2 border-2 border-white p-4  bg-white/30 rounded-lg "
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;