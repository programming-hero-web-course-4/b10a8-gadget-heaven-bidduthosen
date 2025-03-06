import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Layouts = () => {
    return (
        <>
            <header className='bg-[#9538E2]'>
                <Nav></Nav>
            </header>
            <main className='max-w-screen-2xl mx-auto px-5 md:px-12'>
                <Outlet></Outlet>
            </main>
            <footer className='max-w-screen-2xl mx-auto px-5 md:px-12'>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Layouts;