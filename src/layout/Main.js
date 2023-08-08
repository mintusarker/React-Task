import React from 'react';
import Navbar from '../componant/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../componant/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;