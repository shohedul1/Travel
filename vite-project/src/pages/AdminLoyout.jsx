import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'

const AdminLoyout = () => {
    return (
        <div className='flex pt-20 md:pt-24 overflow-hidden'>
            <div data-aos-delay="300" data-aos="fade-right" className='w-[15%]  h-screen bg-[#cc9d9d] pt-20 dark:bg-gray-500 text-white '>
                <AdminSidebar />
            </div>
            <div className={"w-[90%] h-full"}>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLoyout