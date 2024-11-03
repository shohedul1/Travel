import React from 'react'

const Profile = () => {
    return (
        <div className='w-full h-full bg-red-500 flex items-center justify-center overflow-hidden'>
            <div className='w-[500px]  py-40 h-full bg-red-200 p-2 px-5'>
                <form>
                    <div className='flex flex-col gap-3'>
                        {/* <div className='w-full flex-col flex'>
                            <div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    name='image'
                                    onChange={handlePostTravelChange}
                                    accept="image/*"
                                    className='hidden'
                                />
                            </div>
                            {postTravelForm.image ? (
                                <button type="button" onClick={handleImageRemove}>
                                    <img
                                        src={typeof postTravelForm.image === 'string' ? postTravelForm.image : URL.createObjectURL(postTravelForm.image)}
                                        alt="Profile"
                                        className="w-12 h-12 rounded-full"
                                    />
                                </button>
                            ) : (
                                <BiPlus
                                    className="h-12 w-12 bg-white dark:bg-black rounded-full text-gray-400 dark:text-white mb-2 cursor-pointer"
                                    onClick={() => fileInputRef.current?.click()}
                                />
                            )}
                        </div> */}
                        <div className='w-full flex-col flex '>
                            <h1>Name</h1>
                            <input className='p-2 rounded-md outline-none ' type="text" placeholder='Enter your name' />

                        </div>
                        <div className='w-full flex-col flex '>
                            <h1>Email</h1>
                            <input className='p-2 rounded-md outline-none ' type="email" placeholder='Enter your Email' />
                        </div>
                        <div className='w-full flex-col flex '>
                            <h1>Bio</h1>
                            <input className='p-2 rounded-md outline-none ' type="text" placeholder='Enter your Bio' />
                        </div>

                        <div className='w-full flex-col flex '>
                            <h1>Address</h1>
                            <input className='p-2 rounded-md outline-none ' type="text" placeholder='Enter your Bio' />
                        </div>

                        <div className='w-full flex-col flex bg-black text-white py-4 mt-5 rounded-full '>
                            <button>Submit</button>
                        </div>



                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile