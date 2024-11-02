import React, { useState } from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DropdownLinks, NavbarLinks } from "./Navbar";


const ResponsiveMenu = ({ showMenu, setShowMenu, authUser, logout }) => {
    const [toggleIs, setToggleIs] = useState(false);
    const navigate = useNavigate();


    const handleMouseEnter = () => setToggleIs(true);
    const handleMouseLeave = () => setToggleIs(false);

    const image = authUser && authUser.data ? authUser.data.profilePicture : null;
    const Name = authUser && authUser.data ? authUser.data.username : null;


    const handleLogout = () => {
        logout();
        setShowMenu(false);
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }



    return (
        <div
            className={`${showMenu ? "left-0" : "-left-[100%]"
                } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
        >
            <div className="card">
                {
                    authUser ? (
                        <div className="flex items-center justify-start gap-3">
                            {image ? (

                                <button
                                    onClick={() => {
                                        navigate(`/profile/${authUser.data._id}`);
                                        setShowMenu(false)
                                    }}
                                >
                                    <img src={image} alt="Profile" className="w-10 h-10 rounded-full" />
                                </button>
                            ) : (
                                <FaUserCircle size={40} />
                            )}

                            <div>
                                <h1>{Name}</h1>

                                <h1 className="text-sm text-slate-500">Premium user</h1>
                            </div>

                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("/login")
                                setShowMenu(false)
                            }}
                            className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                        >
                            Signup
                        </button>
                    )
                }
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {NavbarLinks.map((data, index) => (
                            <li key={index}>
                                <NavLink
                                    to={data.link}
                                    onClick={() => {
                                        setShowMenu(false);
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}


                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primary font-bold mb-1 inline-block"
                                            : "mb-1 inline-block"
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            </li>
                        ))}
                        <li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <button
                                className="flex items-center h-[72px] gap-1"
                            >
                                Quick Links
                                <FaCaretDown
                                    className={`transition-transform duration-200 ${toggleIs ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {toggleIs && (
                                <div className="absolute z-[9999] mt-2 w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                                    <ul className="space-y-3">
                                        {DropdownLinks.map((data) => (
                                            <li key={data.name}>
                                                <Link to={data.link}>
                                                    {data.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer flex flex-col">
                {
                    authUser && (
                        <div className="pb-4">
                            <button onClick={handleLogout} className="text-left px-4 dark:bg-gray-50 dark:text-black bg-black text-white py-2 transition-all duration-200 scale-105  rounded-full ">
                                Logout
                            </button>
                        </div>
                    )
                }
                <h1>
                    Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>
                </h1>
            </div>
        </div >
    );
};

export default ResponsiveMenu;
