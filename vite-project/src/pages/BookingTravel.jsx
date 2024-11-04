import React from 'react'

const BookingTravel = () => {
  return (
    <div className='w-full h-full flex-col  flex overflow-hidden px-4 gap-2 bg-white dark:bg-black mt-4'>
      <div className='flex rounded-md md:gap-0 gap-2 w-full py-2 px-2 h-full bg-blue-200 justify-between items-center md:overflow-hidden overflow-x-scroll '>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Username</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Carename</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Location</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Price</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Date</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Image</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Panding</div>
      </div>
      <div className='flex rounded-md md:gap-0 gap-2 w-full py-2 px-2 h-full bg-blue-200 justify-between items-center md:overflow-hidden overflow-x-scroll '>
        <div className='px-2 flex flex-col gap-1'>
          <img src="https://res.cloudinary.com/djhjt07rh/image/upload/v1730634971/profile_pictures/scclcgyapp6ecfze6hxe.png" alt="iamge"
            className='h-12 w-12 rounded-full'
          />
          <h1>shohidul</h1>
        </div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Carename</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Location</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Price</div>
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Date</div>
        <img src="https://res.cloudinary.com/djhjt07rh/image/upload/v1730634971/profile_pictures/scclcgyapp6ecfze6hxe.png" alt="iamge"
          className='h-20 w-20 rounded-full'
        />
        <div className='px-2 py-2 bg-gray-500 rounded-full text-white dark:bg-white dark:text-black'>Panding</div>
      </div>
    </div>
  )
}

export default BookingTravel

