import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userPostStore } from "../../store/userPostStore";
import { BiPlus } from "react-icons/bi";
import Loader from "../Loader/Loader";

const initialPostTravelValue = {
    carname: "",
    location: "",
    description: "",
    image: null,
    price: "",
    date: "",
};

const EditTravelPostForm = () => {
    const { postId } = useParams();
    const { getSinglePostTravel, getSinglePost, upDatePostTravel, upDatePostTravelLoader } = userPostStore();
    const [postTravelForm, setPostTravelForm] = useState(initialPostTravelValue);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (postId) {
            const singleIdCall = async () => {
                try {
                    await getSinglePostTravel({ postId });
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            };
            singleIdCall();
        }
    }, [postId, getSinglePostTravel]);

    useEffect(() => {
        if (getSinglePost && getSinglePost.data) {
            setPostTravelForm({
                carname: getSinglePost.data.carname || "",
                location: getSinglePost.data.location || "",
                description: getSinglePost.data.description || "",
                image: getSinglePost.data.image || null,
                price: getSinglePost.data.price || "",
                date: getSinglePost.data.date || "",
            });
        }
    }, [getSinglePost]);

    const handlePostTravelChange = (e) => {
        const { name, files, value } = e.target;
        setPostTravelForm((prevData) => ({
            ...prevData,
            [name]: files && files.length > 0 ? files[0] : value,
        }));
    };

    const handlePostTravelSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            Object.keys(postTravelForm).forEach(key => {
                formData.append(key, postTravelForm[key]);
            });

            const response = await upDatePostTravel({ postData: formData, postId: postId });
            console.log('response', response)
            if (response && response.status === 200) {
                setPostTravelForm(initialPostTravelValue);
                navigate('/admin/showingTraver', { replace: true });
            }

        } catch (error) {
            console.log(error);
        }


    };

    const handleImageRemove = () => {
        setPostTravelForm({ ...postTravelForm, image: null });
    };

    return (
        <form onSubmit={handlePostTravelSubmit}>
            <div className='flex flex-col gap-3'>
                <div className='w-full flex-col flex'>
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
                </div>
                <div className='w-full flex-col flex'>
                    <h1>Name</h1>
                    <input
                        name='carname'
                        type="text"
                        value={postTravelForm.carname}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your name'
                        className='p-2 rounded-md outline-none'
                    />
                </div>
                <div className='w-full flex-col flex'>
                    <h1>Location</h1>
                    <input
                        name='location'
                        type="text"
                        value={postTravelForm.location}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your location'
                        className='p-2 rounded-md outline-none'
                    />
                </div>
                <div className='w-full flex-col flex'>
                    <h1>Description</h1>
                    <textarea
                        name='description'
                        value={postTravelForm.description}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your description'
                        className='p-2 rounded-md outline-none'
                    />
                </div>
                <div className='w-full flex-col flex'>
                    <h1>Price</h1>
                    <input
                        name='price'
                        type="number"
                        value={postTravelForm.price}
                        onChange={handlePostTravelChange}
                        placeholder='Enter your price'
                        className='p-2 rounded-md outline-none'
                    />
                </div>
                <div className='w-full flex-col flex'>
                    <h1>Date</h1>
                    <input
                        name='date'
                        type="date"
                        value={postTravelForm.date}
                        onChange={handlePostTravelChange}
                        className='p-2 rounded-md outline-none'
                    />
                </div>
                <div className='w-full flex-col items-center flex bg-black text-white py-4 mt-5 rounded-full'>
                    <button type="submit">
                        {upDatePostTravelLoader ? <Loader width={'40'} height={'40'} /> : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditTravelPostForm;


