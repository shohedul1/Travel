import React, { useRef, useState } from 'react';
import { BiPlus, BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const initailLoginValue = {
    email: '',
    password: ""
}
const initailSignupValue = {
    username: "",
    email: "",
    password: "",
    gender: "",
    profilePicture: null

}



const LoginSignup = ({ register, loading, login }) => {
    const [loginToggle, setLoginToggle] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [loginData, setLoginData] = useState(initailLoginValue);
    const [signupData, setSignupData] = useState(initailSignupValue);
    const fileInputRef = useRef(null);





    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(prevShow => !prevShow);
    };
    //login
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    //login
    const handleLoginsubmit = async (e) => {
        e.preventDefault();
        login(loginData);
        setLoginData(initailLoginValue);

        setTimeout(() => {
            navigate("/");
            window.location.reload();
        }, 2000);

    }

    //signup
    const handleSignupChange = (e) => {
        const { name, files, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value || ""  // Default to empty string if value is undefined
        }));
    };


    const handleImageRemove = () => {
        setSignupData({ ...signupData, profilePicture: null });
    };

    const handleSignupsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(signupData).forEach(key => {
            formData.append(key, signupData[key]);
        });
        register(formData);
        // Ensure this sends FormData, not just an object
        setSignupData(initailSignupValue);

        
    };








    return (
        <div className="h-full w-full flex justify-center items-center overflow-hidden py-32">
            <div className="bg-gray-300 dark:bg-gray-400 h-full rounded-md w-[400px] mx-5 p-5 ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold text-center dark:text-white">
                            Welcome to Our Travel Platform
                        </div>
                        <div className="flex w-full bg-white dark:bg-black rounded-md p-2">
                            <button
                                onClick={() => setLoginToggle(true)}
                                className={`hover:scale-105 w-[50%] px-5 py-1 rounded-md ${loginToggle ? 'bg-[#43b391]  dark:bg-[#5f6b68]' : 'bg-transparent text-black'
                                    } dark:text-white`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setLoginToggle(false)}
                                className={`hover:scale-105 w-[50%] px-5 py-1 rounded-md ${!loginToggle ? 'bg-[#43b391] dark:bg-[#5f6b68]' : 'bg-transparent text-black'
                                    } dark:text-white`}
                            >
                                Signup
                            </button>
                        </div>
                    </div>

                    {loginToggle ? (
                        <form onSubmit={handleLoginsubmit} className='flex flex-col gap-4'>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    required
                                    placeholder="enter your email..."
                                    className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white bg-[#cec2c2] dark:bg-[#f5ecec]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        name='password'
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        required
                                        placeholder="enter your password..."
                                        className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white w-full pr-10 bg-[#cec2c2] dark:bg-[#f5ecec]"
                                    />
                                    {
                                        showPassword ? (
                                            <BiSolidHide
                                                onClick={togglePasswordVisibility}
                                                className="absolute top-3 right-2 cursor-pointer text-gray-600 dark:text-gray-300"
                                            />
                                        ) : (
                                            <BiShow
                                                onClick={togglePasswordVisibility}
                                                className="absolute top-3 right-2 cursor-pointer text-gray-600 dark:text-gray-300"
                                            />


                                        )
                                    }

                                </div>
                            </div>
                            <div className='flex items-center justify-center transition-all duration-2000 hover:scale-110'>
                                <button type='submit' className='px-12 py-2 bg-[#d0ffc9] dark:bg-black text-black  text-xl dark:text-white rounded-full'>
                                    {loading ? <Loader /> : "Signup"}
                                </button>
                            </div>

                        </form>
                    ) : (
                        <form onSubmit={handleSignupsubmit} className='flex flex-col gap-4'>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Upload Image
                                </label>
                                <div>
                                    <input
                                        ref={fileInputRef}
                                        required
                                        type="file"
                                        name='profilePicture'
                                        onChange={handleSignupChange}
                                        accept="image/*"
                                        className='hidden'
                                    />
                                </div>
                                {signupData.profilePicture ? (
                                    <button onClick={handleImageRemove}>
                                        <img
                                            src={URL.createObjectURL(signupData.profilePicture)}
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

                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name='username'
                                    value={signupData.username}
                                    onChange={handleSignupChange}
                                    required
                                    placeholder="enter your name..."
                                    className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white bg-[#cec2c2] dark:bg-[#f5ecec]"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    onChange={handleSignupChange}
                                    required
                                    value={signupData.email}
                                    placeholder="enter your email..."
                                    className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white bg-[#cec2c2] dark:bg-[#f5ecec]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        name='password'
                                        value={signupData.password}
                                        onChange={handleSignupChange}
                                        required
                                        placeholder="enter your password..."
                                        className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white w-full pr-10 bg-[#cec2c2] dark:bg-[#f5ecec]"
                                    />
                                    {
                                        showPassword ? (
                                            <BiSolidHide
                                                onClick={togglePasswordVisibility}
                                                className="absolute top-3 right-2 cursor-pointer text-gray-600 dark:text-gray-300"
                                            />
                                        ) : (
                                            <BiShow
                                                onClick={togglePasswordVisibility}
                                                className="absolute top-3 right-2 cursor-pointer text-gray-600 dark:text-gray-300"
                                            />
                                        )
                                    }

                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl dark:text-white text-black font-bold">
                                    Email
                                </label>
                                <select
                                    name='gender'
                                    value={signupData.gender}
                                    onChange={handleSignupChange}
                                    required
                                    className="p-2 rounded-md outline-none focus:border-red-200 border placeholder:text-white bg-[#cec2c2] dark:bg-[#f5ecec]"
                                >
                                    <option value="">Choose a role</option>
                                    <option value="admin">Admin</option>
                                    <option value="client">Client</option>
                                </select>
                            </div>

                            <div className='flex items-center justify-center transition-all duration-2000 hover:scale-110'>
                                <button type='submit' className='px-12 py-2 bg-[#d0ffc9] dark:bg-black text-black  text-xl dark:text-white rounded-full'>
                                    {loading ? <Loader /> : "Signup"}

                                </button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;