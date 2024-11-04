// import React, { useEffect } from 'react';
// import CountUp from 'react-countup';
// import { userApplyStore } from '../store/userAppleyStore';


// const Admin = () => {
//     const { getAllApply, getAllPostApply } = userApplyStore();

//     useEffect(() => {
//         getAllPostApply();
//     }, [getAllPostApply]);
//     console.log("Admin", getAllApply)

//     const dataLength = getAllApply.data ? getAllApply.data.length : 0;

//     return (
//         <div className='flex  justify-center pt-32 bg-[#edeee5] h-screen'>
//             <div className='flex gap-8 md:flex-row flex-col'>
//                 <div data-aos-delay="400" data-aos="zoom-in-right" className='flex flex-col gap-4'>
//                     <h1 className='text-[#f73dbf] text-3xl font-bold '>All Travel post</h1>
//                     <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all  text-white dark:text-black '>
//                         <CountUp end={200} delay={1} duration={20} /> +
//                     </div>
//                 </div>
//                 <div data-aos-delay="500" data-aos="zoom-in" className='flex flex-col gap-4'>
//                     <h1 className='text-[#a3fd2d] text-3xl font-bold '>Success travel</h1>
//                     <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all  text-white dark:text-black '>
//                         <CountUp end={250} delay={1} duration={40} /> +
//                     </div>
//                 </div>
//                 <div data-aos-delay="600" data-aos="zoom-in-left" className='flex flex-col gap-4'>
//                     <h1 className='text-[#cd2aff] text-3xl font-bold '>Waiting travel</h1>
//                     <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all  text-white dark:text-black '>
//                         <CountUp end={dataLength} delay={1} duration={20} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin

import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { userApplyStore } from '../store/userAppleyStore';
import { userPostStore } from '../store/userPostStore';

const Admin = () => {
    const { getAllApply, getAllPostApply } = userApplyStore();
    const { getAllPostTravel, getAllPost } = userPostStore();



    useEffect(() => {
        getAllPostApply();
        getAllPostTravel();
    }, [getAllPostApply, getAllPostTravel]);

    console.log("Admin", getAllApply);

    // Safely check if `getAllApply` and `getAllApply.data` exist
    const dataLength = getAllApply && getAllApply.data ? getAllApply.data.length : 0;
    const allpostLenght = getAllPost && getAllPost.data ? getAllPost.data.length : 0;


    return (
        <div className='flex justify-center pt-32 bg-[#edeee5] h-screen'>
            <div className='flex gap-8 md:flex-row flex-col'>
                <div data-aos-delay="400" data-aos="zoom-in-right" className='flex flex-col gap-4'>
                    <h1 className='text-[#f73dbf] text-3xl font-bold '>All Travel post</h1>
                    <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all text-white dark:text-black'>
                        <CountUp end={allpostLenght} delay={1} duration={20} /> +
                    </div>
                </div>
                <div data-aos-delay="500" data-aos="zoom-in" className='flex flex-col gap-4'>
                    <h1 className='text-[#a3fd2d] text-3xl font-bold '>Success travel</h1>
                    <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all text-white dark:text-black'>
                        <CountUp end={250} delay={1} duration={40} /> +
                    </div>
                </div>
                <div data-aos-delay="600" data-aos="zoom-in-left" className='flex flex-col gap-4'>
                    <h1 className='text-[#cd2aff] text-3xl font-bold '>Waiting travel</h1>
                    <div className='flex text-xl items-center justify-center bg-black dark:bg-white px-5 py-4 rounded-full hover:scale-110 duration-300 transition-all text-white dark:text-black'>
                        <CountUp end={dataLength} delay={1} duration={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
