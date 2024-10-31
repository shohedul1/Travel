import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='w-full h-screen flex items-center mx-auto bg-gray-500 opacity-100'>
      <div className='w-[200px] h-[200px] rounded-full bg-white flex items-center justify-center mx-auto'>
        <Link to={'/'} className='text-center text-4xl text-red-500 font-bold'>400 page</Link>
      </div>

    </div>
  )
}

export default NoPage