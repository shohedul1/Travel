import React from 'react'
import EditTravelPostFrom from '../components/EditTravelPostFrom/EditTravelPostFrom'

const EditTravelPost = () => {
    return (
        <div className='w-full h-full bg-red-500 flex items-center justify-center overflow-hidden'>
            <div className='w-[500px] h-full bg-red-200 p-2 py-10 px-5'>
                <EditTravelPostFrom/>
            </div>
        </div>
    )
}

export default EditTravelPost