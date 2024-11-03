import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { userAuthStore } from "../store/useAuthStore";
import Loader from "../components/Loader/Loader";

const initialPostTravelValue = {
    username: "",
    profilePicture: null,
    email: ""
};

const Profile = () => {
    const { userId } = useParams();
    const { userUpDateLoader, authUser, userUpDate } = userAuthStore();
    const [profile, setProfile] = useState(initialPostTravelValue);
    const fileInputRef = useRef(null);
    const [toggle, setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle)
    }




    useEffect(() => {
        if (authUser && authUser.data && userId) {
            setProfile({
                username: authUser.data.username || "", // Updated this line
                profilePicture: authUser.data.profilePicture || "", // Updated this line
                email: authUser.data.email || "", // Updated this line
            });
        }
    }, [authUser, userId]);

    const handlePostTravelChange = (e) => {
        const { name, files, value } = e.target;
        setProfile((prevData) => ({
            ...prevData,
            [name]: files && files.length > 0 ? files[0] : value,
        }));
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(profile).forEach(key => {
            formData.append(key, profile[key]);
        });

        if (formData) {
            userUpDate({ upData: formData, userId: userId });
        }
        setToggle(false)

    };

    const handleImageRemove = () => {
        setProfile({ ...profile, profilePicture: null }); // Corrected the state reference here
    };

    return (
        <div className='w-full h-full bg-red-500 flex items-center justify-center overflow-hidden'>
            <div className='w-[500px] py-40 h-full bg-red-200 p-2 px-5'>
                {
                    toggle ? (
                        <form onSubmit={handleProfileUpdate}>
                            <div className='flex flex-col gap-3'>
                                <div className='w-full flex-col flex'>
                                    <div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            name='profilePicture' // Updated name to match state
                                            onChange={handlePostTravelChange}
                                            accept="image/*"
                                            className='hidden'
                                        />
                                    </div>
                                    {profile.profilePicture ? ( // Updated this line
                                        <button type="button" onClick={handleImageRemove}>
                                            <img
                                                src={typeof profile.profilePicture === 'string' ? profile.profilePicture : URL.createObjectURL(profile.profilePicture)}
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
                                        className='p-2 rounded-md outline-none'
                                        type="text"
                                        name="username" // Added name for handling changes
                                        value={profile.username} // Bind value
                                        onChange={handlePostTravelChange} // Bind change handler
                                        placeholder='Enter your name'
                                    />
                                </div>
                                <div className='w-full flex-col flex'>
                                    <h1>Email</h1>
                                    <input
                                        className='p-2 rounded-md outline-none'
                                        type="email"
                                        name="email" // Added name for handling changes
                                        value={profile.email} // Bind value
                                        onChange={handlePostTravelChange} // Bind change handler
                                        placeholder='Enter your Email'
                                    />
                                </div>

                                <div className='w-full flex-col items-center flex bg-black text-white py-4 mt-5 rounded-full'>
                                    <button type="submit">
                                        {userUpDateLoader ? <Loader width={'40'} height={'40'} /> : "Submit"}
                                    </button> {/* Added type */}
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="flex items-center flex-col gap-4">
                            <h1 className="text-4xl font-bold" >Welcome your profile </h1>
                            <div className="flex flex-col items-center">
                                <img src={profile.profilePicture} alt="image" className="w-20 h-20 rounded-full " />
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold">Name</h1>
                                <h1 className="text-xl font-bold text-white">{profile.username}</h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold">Email</h1>
                                <h1 className="text-xl font-bold text-white">{profile.email}</h1>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={handleToggle}
                                    className="px-4 py-2 bg-blue-400 rounded-full hover:scale-110 duration-300 transition-all">
                                    Edit
                                </button>

                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Profile;
