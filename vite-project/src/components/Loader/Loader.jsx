import React from 'react';
import { ThreeDots } from "react-loader-spinner"

const Loader = () => {
    return (
        <>
            < ThreeDots
                visible={true}
                height="30"
                width="30"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </>
    )
}

export default Loader