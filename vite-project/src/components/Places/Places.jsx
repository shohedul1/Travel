import React, { useState } from "react";
import PlaceCard from "./PlaceCard";


const Places = ({ handleOrderPopup, Data }) => {
  const travelPosts = Array.isArray(Data) ? Data : [];
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const loadMorePhotos = () => {
    setVisiblePhotos(prevVisiblePhotos => Math.min(prevVisiblePhotos + 6, travelPosts.length));
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {travelPosts.slice(0, visiblePhotos).map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                item={item}
              />
            ))}
          </div>
          <div>
            {visiblePhotos < travelPosts.length && (
              <div className='flex justify-center'>
                <button
                  onClick={loadMorePhotos}
                  className='text-center mt-10 cursor-pointer bg-orange-500 text-white py-1 px-5 rounded-md'>
                  View More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;