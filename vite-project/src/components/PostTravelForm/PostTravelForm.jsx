import React, { useRef, useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { userPostStore } from '../../store/userPostStore';
// import { useNavigate } from 'react-router-dom';

const initailPostTravelValue = {
    carname: "",
    location: "",
    description: "",
    image: null,
    price: "",
    date: "",
}

const PostTravelForm = () => {
    const { travelPost } = userPostStore();

    const [postTraverForm, setPostTraverForm] = useState(initailPostTravelValue);
    const fileInputRef = useRef(null);



    // const navigate = useNavigate();



    const handlePostTravelChange = (e) => {
        const { name, files, value } = e.target;
        setPostTraverForm((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value || ""  // Default to empty string if value is undefined
        }));
    };



    const handlePostTravelSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(postTraverForm).forEach(key => {
            formData.append(key, postTraverForm[key]);
        });
        travelPost(formData);
        // Ensure this sends FormData, not just an object
        // setSignupData(initailSignupValue);
        console.log('postTraverForm', postTraverForm);
        setPostTraverForm(initailPostTravelValue);


    };


    const handleImageRemove = () => {
        setPostTraverForm({ ...postTraverForm, image: null });
    };
    return (
        <form onSubmit={handlePostTravelSubmit}>
            <div className='flex flex-col gap-3'>
                <div className='w-full flex-col flex '>
                    <div>
                        <input
                            ref={fileInputRef}
                            required
                            type="file"
                            name='image'
                            onChange={handlePostTravelChange}
                            accept="image/*"
                            className='hidden'
                        />
                    </div>
                    {postTraverForm.image ? (
                        <button
                            onClick={handleImageRemove}
                        >
                            <img
                                src={URL.createObjectURL(postTraverForm.image)}
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
                    {/* <input onChange={handlePostTravelChange} name='iamge' className='p-2 rounded-md outline-none ' type="file" placeholder='Enter your name' /> */}
                </div>
                <div className='w-full flex-col flex '>
                    <h1>Name</h1>
                    <input
                        name='carname'
                        type="text"
                        value={postTraverForm.carname}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your name'
                        className='p-2 rounded-md outline-none ' />

                </div>
                <div className='w-full flex-col flex '>
                    <h1>Location</h1>
                    <input
                        name='location'
                        type="text"
                        value={postTraverForm.location}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your location'
                        className='p-2 rounded-md outline-none ' />
                </div>
                <div className='w-full flex-col flex '>
                    <h1>description</h1>
                    <textarea
                        name='description'
                        type="text"
                        value={postTraverForm.description}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your description'
                        className='p-2 rounded-md outline-none '
                    />
                </div>
                <div className='w-full flex-col flex '>
                    <h1>Price</h1>
                    <input
                        name='price'
                        type="number"
                        value={postTraverForm.price}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your price'
                        className='p-2 rounded-md outline-none '
                    />
                </div>
                <div className='w-full flex-col flex '>
                    <h1>Date</h1>
                    <input
                        name='date'
                        type="date"
                        value={postTraverForm.date}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your date'
                        className='p-2 rounded-md outline-none '
                    />
                </div>

                <div className='w-full flex-col flex bg-black text-white py-4 mt-5 rounded-full '>
                    <button>Submit</button>
                </div>
            </div>

        </form>
    )
}

export default PostTravelForm