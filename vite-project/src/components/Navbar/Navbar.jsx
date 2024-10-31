import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';


export const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className='fixed top-0 right-0 w-full z-50 bg-white  backdrop-blur-sm text-black shadow-md'>
        <div className='bg-gradient-to-l from-[#5c4848] to-secondary text-white '>
          <div className='container py-[2px] sm:block hidden'>
            <div className='flex items-center justify-between'>
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +8801758225368</p>
            </div>
          </div>
        </div>
        {
          true ? (
            <>
              <div className='container py-3 sm:py-0'>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 font-bold text-2xl">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      <img src={Logo} alt="" className="h-16" />
                    </Link>
                  </div>
                  <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'>
                      {NavbarLinks.map((item) => (
                        <li className="py-4" key={item.name}>
                          <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to={item.link}
                            className={({ isActive }) =>
                              isActive ? "active text-primary font-bold" : ""
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}

                      <li className="group relative cursor-pointer">
                        <Link
                          href="/"
                          className="flex h-[72px] items-center gap-[2px]"
                        >
                          Quick Links{" "}
                          <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                          </span>
                        </Link>
                        <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                          <ul className="space-y-3">
                            {DropdownLinks.map((data) => (
                              <li key={data.name}>
                                <Link
                                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                  to={data.link}
                                >
                                  {data.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-4">
                    {
                      false ? (
                        <>
                          {
                            'admin' === "admin" && (
                              <>
                                <button
                                  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                                  onClick={() => {
                                    handleOrderPopup();
                                  }}
                                >
                                  Admin
                                </button>

                              </>
                            )
                          }
                          {
                            'client' === "client" && (
                              <>
                                <button
                                  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                                  onClick={() => {
                                    handleOrderPopup();
                                  }}
                                >
                                  client
                                </button>
                              </>
                            )
                          }
                        </>
                      ) : (
                        <>
                          <Link to={"/login"}
                            className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"

                          >
                            Signup
                          </Link>
                        </>

                      )
                    }

                    {/* Mobile Hamburger icon */}
                    <div className="md:hidden block">
                      {showMenu ? (
                        <HiMenuAlt1
                          onClick={toggleMenu}
                          className=" cursor-pointer transition-all"
                          size={30}
                        />
                      ) : (
                        <HiMenuAlt3
                          onClick={toggleMenu}
                          className="cursor-pointer transition-all"
                          size={30}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        }
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar
