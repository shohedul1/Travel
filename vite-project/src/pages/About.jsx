import React, { useEffect } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import { userPostStore } from "../store/userPostStore";

const About = () => {
  const { getRecentPostTravel, getRecentPost } = userPostStore();

  // console.log('getRecentPost', getRecentPost)
  const RecentData = getRecentPost?.data || [];

  // console.log("RecentData", RecentData);


  useEffect(() => {
    getRecentPostTravel();
  }, [getRecentPostTravel]);

  return (
    <>
      <div className="container pt-14">
        <div className="py-10 gap-5 flex flex-col">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to <strong>Travellogo</strong>, your trusted companion for unforgettable journeys. Our mission is to provide tailored travel experiences that connect you with the heart of each destination.
          </p>
          <p>
            <strong>Who We Are:</strong> We are a team of passionate explorers and travel experts committed to curating unique, memorable adventures. With [X] years of experience, we've guided travelers across {'[mention regions, e.g., Europe, Asia, etc.]'} and helped them create stories to share for a lifetime.
          </p>
          <strong>What We Offer:</strong>
          <ul className="flex flex-col font-bold text-sm">
            <li>
              Custom Itineraries tailored to your preferences.
            </li>
            <li>
              Exclusive Experiences that go beyond the usual sightseeing.
            </li>
            <li>
              24/7 Support to ensure seamless travel from start to finish.
            </li>
          </ul>
          <p>
            <strong>Our Promise:</strong>
            We believe in making travel accessible, inspiring, and enriching for all. With <strong>Travellogo</strong>, you are not just a tourist—you are an explorer, adventurer, and part of a global community.

          </p>
        </div>
      </div>
      <Location />
      <BlogsComp RecentData={RecentData} />
    </>
  );
};

export default About;