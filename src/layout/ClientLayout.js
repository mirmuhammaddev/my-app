import React from 'react';
import Navbar from "../components/Navbar_components/Navbar";
import Ending from "../components/Ending_components/Ending";
import { Outlet } from 'react-router-dom';
const ClientLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Ending/>
        </>
    );
};

export default ClientLayout;