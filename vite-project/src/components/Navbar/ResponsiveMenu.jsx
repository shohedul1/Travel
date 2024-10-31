import React, { useState } from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { DropdownLinks, NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    const [toggleIs, setToggleIs] = useState(false);

    const handleMouseEnter = () => setToggleIs(true);
    const handleMouseLeave = () => setToggleIs(false);

    return (
        <div
            className={`${showMenu ? "left-0" : "-left-[100%]"
                } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
        >
            <div className="card">
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1 className="text-sm text-slate-500">Premium user</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {NavbarLinks.map((data, index) => (
                            <li key={index}>
                                <NavLink
                                    to={data.link}
                                    onClick={() => setShowMenu(false)}
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
            <div className="footer">
                <h1>
                    Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>
                </h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
