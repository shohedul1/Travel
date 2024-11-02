import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { userPostStore } from '../../store/userPostStore';
import Loader from '../Loader/Loader';

const ShowingTraverCard = ({ item }) => {
    const navigate = useNavigate();

    const { travelPostDelete, getAllPostTravel, deleteLoader } = userPostStore();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            await travelPostDelete({ postId: item._id });
            navigate('/admin/showingTraver');
            await getAllPostTravel();
        }
    };


    return (
        <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.carname}
                    className="mx-auto h-[200px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
            </div>
            <div className="space-y-1 p-3">
                <h1 className="line-clamp-1 font-bold text-xl">{item.carname}</h1>
                <div className="flex items-center gap-2 opacity-70">
                    <IoLocationSharp />
                    <span>{item.location}</span>
                </div>
                <p className="line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                    <div className="opacity-70">
                        <p>{item.date}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">${item.price}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Link to={`/admin/${item._id}`} className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-110 duration-300 transition-all">
                        Edit
                    </Link>
                    <button
                        onClick={handleDelete}
                        disabled={deleteLoader}
                        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-110 duration-300 transition-all"
                    >
                        {deleteLoader ? <Loader width={'40'} height={'40'} /> : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowingTraverCard;
