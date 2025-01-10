import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className=" group flex flex-col items-center text-center gap-2 w-full  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className=" rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <div className=" p-4">
        <h1 className=" font-semibold text-lg">{title}</h1>
        <p className="text-sm text-justify mt-3">
          {description}
        </p>

        <h3 className=" text-backgroundColor underline cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out m-3">
          Learn more
        </h3>
      </div>
    </div >
  );
};

export default ServicesCard;
