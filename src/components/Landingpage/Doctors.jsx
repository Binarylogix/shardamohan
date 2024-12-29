import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/profile.png";

const Doctors = () => {
  return (
    <div className="flex justify-center items-center px-5 py-5">
      <img 
        src={img} 
        alt="Profile" 
        className="w-full max-w-[1200px] h-auto object-cover rounded-md shadow-lg"
      />
    </div>
  );
};

export default Doctors;
