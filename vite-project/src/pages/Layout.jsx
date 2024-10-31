// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OrderPopup from '../components/OrderPopup/OrderPopup';

const Layout = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <>
            <Navbar handleOrderPopup={handleOrderPopup} />
            <div>
                <Outlet />
            </div>
            <Footer />
            <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
    );
};

export default Layout;
