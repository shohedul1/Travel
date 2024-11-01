// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OrderPopup from '../components/OrderPopup/OrderPopup';

const Layout = ({ logout, authUser }) => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <>
            <Navbar handleOrderPopup={handleOrderPopup} authUser={authUser} logout={logout} />
            <div>
                <Outlet />
            </div>
            <Footer />
            <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
    );
};

export default Layout;
