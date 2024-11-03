import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  console.log("item", item);
  const { image, carname, date, description, location } = item;

  return (
    <>
      <Link
        to={`/blogs/${item._id}`}
        onClick={() => {
          window.scrollTo(0, 0);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        state={{ image, carname, date, description, location }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{item.date}</p>
            <p className="line-clamp-1">By {item.carname}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{item.location}</h1>
            <p className="line-clamp-2">{item.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;