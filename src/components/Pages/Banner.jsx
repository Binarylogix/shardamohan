import React from "react";

const Banner = ({tital}) => {
    return (
        <>
            <div className="pt-24 lg:pt-16  relative flex flex-col justify-center items-center w-full h-[300px] bg-[url('assets/img/display.jpg')] bg-no-repeat bg-cover bg-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white ">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        {tital}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Banner


