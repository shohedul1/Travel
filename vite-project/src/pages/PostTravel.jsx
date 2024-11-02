import React from 'react'
import PostTravelForm from '../components/PostTravelForm/PostTravelForm'

const PostTravel = () => {
    return (
        <div className='w-full h-full bg-red-500 flex items-center justify-center overflow-hidden'>
            <div className='w-[500px] h-full bg-red-200 p-2 py-10 px-5'>
                <PostTravelForm/>
            </div>
        </div>
    )
}

export default PostTravel