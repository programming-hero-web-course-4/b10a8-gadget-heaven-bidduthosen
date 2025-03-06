import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
            <nav className='flex items-center flex-col'>
                <h6 className="font-semibold text-xl mb-2">Services</h6>
                <a className="link link-hover text-gray-500">Branding</a>
                <a className="link link-hover text-gray-500">Design</a>
                <a className="link link-hover text-gray-500">Marketing</a>
                <a className="link link-hover text-gray-500">Advertisement</a>
            </nav>
            <nav className='flex items-center flex-col'>
                <h6 className="font-semibold text-xl mb-2">Company</h6>
                <a className="link link-hover text-gray-500">About us</a>
                <a className="link link-hover text-gray-500">Contact</a>
                <a className="link link-hover text-gray-500">Jobs</a>
                <a className="link link-hover text-gray-500">Press kit</a>
            </nav>
            <nav className='flex items-center flex-col'>
                <h6 className="font-semibold text-xl mb-2">Legal</h6>
                <a className="link link-hover text-gray-500">Terms of use</a>
                <a className="link link-hover text-gray-500">Privacy policy</a>
                <a className="link link-hover text-gray-500">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;