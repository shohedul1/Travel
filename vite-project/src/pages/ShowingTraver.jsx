import { useEffect } from "react";
import { userPostStore } from "../store/userPostStore";
import ShowingTraverCard from "../components/ShowingTraverCard/ShowingTraverCard";

const ShowingTraver = () => {
  const { getAllPostTravel, getAllPost } = userPostStore();

  useEffect(() => {
    getAllPostTravel();
  }, []);

  const existingData = getAllPost?.data || [];

  return (
    <div>
      {existingData.length === 0 ? (
        <div className="w-full h-full pt-40 flex items-center justify-center">
          <h1 className="text-[#e2a5a5] text-4xl font-bold">Post not found</h1>
        </div>
      ) : (
        <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
          <section data-aos="fade-up" className="container">
            <h1 className="my-8 border-l-8 border-primary/50 dark:text-white py-2 pl-2 text-3xl font-bold">
              All Travel Post
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {existingData.map((item, index) => (
                <ShowingTraverCard
                  key={item._id || index} // Use a unique key if available
                  item={item}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ShowingTraver;
