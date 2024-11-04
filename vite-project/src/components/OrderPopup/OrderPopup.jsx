import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { userApplyStore } from "../../store/userAppleyStore";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
const initalValue = {
  name: '',
  email: '',
  address: '',
  number: ''

}

const OrderPopup = ({ orderPopup, setOrderPopup, selectedId }) => {
  // applyData, postId
  const { applyPostLoader, applyPost } = userApplyStore();
  const navigate = useNavigate();

  const [data, setData] = useState(initalValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await applyPost({ applyData: data, postId: selectedId });
      console.log('response', response)

      if (response && response.status === 201) {
        setData(initalValue)
        navigate('/clienBookingTravel', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    } catch (error) {
      console.error(error);
    } finally {
      // console.log(data)
      setData(initalValue)
    }

  }
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="number"
                  name="number"
                  required
                  value={data.number}
                  onChange={handleChange}
                  placeholder="Eneter you number"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  name="address"
                  required
                  onChange={handleChange}
                  value={data.address}
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    {applyPostLoader ? <Loader width={"40"} height={"40"} /> : "Book Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;