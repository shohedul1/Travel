import React, { useEffect } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import { userPostStore } from "../store/userPostStore";

const Blogs = () => {
  const { getRecentPostTravel, getRecentPost } = userPostStore();

  // console.log('getRecentPost', getRecentPost)
  const RecentData = getRecentPost?.data || [];

  // console.log("RecentData", RecentData);


  useEffect(() => {
    getRecentPostTravel();
  }, [getRecentPostTravel]);
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp RecentData={RecentData} />
    </div>
  );
};

export default Blogs;