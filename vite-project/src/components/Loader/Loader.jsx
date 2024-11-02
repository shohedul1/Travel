import React from 'react';
import { ThreeDots } from "react-loader-spinner"

const Loader = ({height, width}) => {
    return (
        <>
            < ThreeDots
                visible={true}
                height={height}
                width={width}
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