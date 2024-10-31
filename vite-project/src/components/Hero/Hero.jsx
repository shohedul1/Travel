import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const [priceValue, setPriceValue] = useState(30);

    return (
        <div className=" bg-black/20 h-full mt-22">
            <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                <div className="container grid grid-cols-1 gap-2">
                    <div className="text-white ">
                        <div className=" flex items-center flex-col justify-center sm:-translate-y-10 pb-10">
                            <p className="text-center  font-bold text-sm md:text-5xl bg-gradient-to-t from-[#42fc8f] to-[#ff0404] r-[#fffff] bg-clip-text text-transparent ">
                                <Typewriter
                                    cursor
                                    cursorBlinking
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={500}
                                    words={[
                                        'Welcome to our profitional platfrom',
                                    ]}
                                />
                            </p>
                            <p className="text-center  font-bold text-sm md:text-3xl bg-gradient-to-l from-[#42fc8f] to-[#ff0404] r-[#fffff] bg-clip-text text-transparent">
                                <Typewriter
                                    cursor
                                    cursorBlinking
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={75}
                                    words={[
                                        '👋I’m a passionate MERN Stack Developer,skilled in building dynamic',

                                    ]}
                                />

                            </p>
                            <p className="text-center  font-bold text-sm md:text-3xl  bg-gradient-to-r from-[#42fc8f] to-[#ff0404] r-[#fffff] bg-clip-text text-transparent">
                                <Typewriter
                                    cursor
                                    cursorBlinking
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={200}
                                    words={[
                                        "strong foundation in MongoDB, Express.js,Next.js or vite or React, and Node.js",
                                        "I create seamless, responsive, and efficient web solutions tailored to user needs",
                                    ]}
                                />

                            </p>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="200">
                            Our Packages
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="font-bold text-3xl"
                        >
                            Search Your Destination
                        </p>

                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className=" bg-white rounded-md  relative"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  py-3 px-6">
                            <div>
                                <label className="opacity-70">
                                    Searh your Destination
                                </label>
                                <input
                                    type="text"
                                    name="destination"
                                    id="destination"
                                    placeholder="Country"
                                    className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="destination" className="opacity-70">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="destination"
                                    id="destination"
                                    className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="destination" className="opacity-70 block">
                                    <div className="w-full flex justify-between items-center">
                                        <p>Max Price</p>
                                        <p className="font-bold text-xl">$ {priceValue}</p>
                                    </div>
                                </label>
                                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                                    <input
                                        type="range"
                                        name="destination"
                                        id="destination"
                                        className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                                        min="150"
                                        max="1000"
                                        value={priceValue}
                                        step="10"
                                        onChange={(e) => setPriceValue(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                            Search Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;