import React from "react";
import BlogCard from "./BlogCard";


const BlogsComp = ({ RecentData }) => {
    const newData = Array.isArray(RecentData) ? RecentData : [];

    return (
        <>
            <div className="dark:bg-gray-900 dark:text-white py-10">
                <section data-aos="fade-up" className="container ">
                    <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                        Our Latest Blogs
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {newData.map((item, index) => (
                            <BlogCard key={index} item={item} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogsComp;