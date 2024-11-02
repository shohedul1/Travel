import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiPostOffice } from "react-icons/gi";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";




const AdminSidebarLink = [
    {
        name: 'Post Travel',
        Link: "/admin/postTravel",
        icons: <GiPostOffice />
    },
    {
        name: 'Booking Travel',
        Link: "/admin/bookingTravel",
        icons: <FaTemperatureQuarter />
    },
    {
        name: 'Showing Travel',
        Link: "/admin/showingTraver",
        icons: <FaShower />

    }
];

const AdminSidebar = () => {
    return (
        <div className='flex flex-col  gap-5 items-center justify-center'>
            {
                AdminSidebarLink.map((item, index) => (
                    <NavLink
                        key={index}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        to={item.Link}
                        className={({ isActive }) =>
                            isActive
                                ? "active bg-blue-400 px-4 py-2 dark:bg-blue-600 text-white rounded-full"
                                : "px-4 hover:bg-blue-400 py-2 rounded-full hover:scale-110 duration-300 transition-all text-black"
                        }
                    >
                        <div className='hidden md:block'>
                            {item.name}
                        </div>
                        <div className='md:hidden'>
                            {item.icons}
                        </div>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default AdminSidebar;
