import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";
import { userPostStore } from "../store/userPostStore";

const BlogsDetails = (props) => {

  const { getRecentPostTravel, getRecentPost } = userPostStore();

  // console.log('getRecentPost', getRecentPost)
  const RecentData = getRecentPost?.data || [];

  // console.log("RecentData", RecentData);


  useEffect(() => {
    getRecentPostTravel();
  }, [getRecentPostTravel]);

  const Location = useLocation();
  console.log(props, " props");
  console.log(Location, " useLocation Hook");
  const { image, carname, date, description, location } = Location.state;

  return (
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={carname}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by  on {date}
        </p>
        <h1 className="text-2xl font-semibold">{location}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      {/* <BlogsComp /> */}
      <BlogsComp RecentData={RecentData} />

    </div>
  );
};

export default BlogsDetails;