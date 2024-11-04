import React, { useEffect, useState } from 'react'
import OrderPopup from '../components/OrderPopup/OrderPopup';
import NatureVid from "../assets/video/main.mp4";
import Hero from '../components/Hero/Hero';
import Places from '../components/Places/Places';
import BannerPic from '../components/BannerPic/BannerPic';
import BannerImg from "../assets/cover-women.jpg";
import BlogsComp from '../components/Blogs/BlogsComp';
import Banner from '../components/Banner/Banner';
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from '../components/Testimonial/Testimonial';
import { userPostStore } from '../store/userPostStore';



const Home = () => {
  const { getAllPostTravel, getAllPost, getRecentPostTravel, getRecentPost } = userPostStore();
  const Data = getAllPost?.data || [];
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // New state for storing selected ID

  const handleOrderPopup = (id) => {
    setSelectedId(id); // Set the selected ID
    setOrderPopup(!orderPopup);
  };

  // console.log('getRecentPost', getRecentPost)
  const RecentData = getRecentPost?.data || [];

  // console.log("RecentData", RecentData);


  useEffect(() => {
    getAllPostTravel();
    getRecentPostTravel();
  }, [getAllPostTravel, getRecentPostTravel]);



  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} Data={Data} />
        <BannerPic img={BannerImg} />
        <BlogsComp RecentData={RecentData} />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} selectedId={selectedId} />
      </div>
    </>
  )
}

export default Home