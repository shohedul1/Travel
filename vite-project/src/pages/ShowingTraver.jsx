import React from 'react'
import Places from '../components/Places/Places'
import OrderPopup from '../components/OrderPopup/OrderPopup';

const ShowingTraver = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
              <Places handleOrderPopup={handleOrderPopup} />

              <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

    </div>
  )
}

export default ShowingTraver