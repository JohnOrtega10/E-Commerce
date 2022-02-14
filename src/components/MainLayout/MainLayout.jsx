import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '..';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;