import React, { useEffect } from "react";
import Places from "../components/Places/Places";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import { userPostStore } from "../store/userPostStore";

const PlacesRoute = () => {

  const { getAllPostTravel, getAllPost } = userPostStore();
  const Data = getAllPost?.data || [];




  useEffect(() => {
    getAllPostTravel();
  }, [getAllPostTravel]);


  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div className="pt-14">
        <Places handleOrderPopup={handleOrderPopup} Data={Data} />
      </div>
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

    </>
  );
};

export default PlacesRoute;