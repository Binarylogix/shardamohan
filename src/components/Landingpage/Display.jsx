import React from 'react';
import Button from "../../layouts/Button";

const Display = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[500px] bg-[url('assets/img/display.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl">
          Your tagline or description goes here.
        </p>
        <Button title= "Get Started"/>
      </div>
    </div>
  );
}

export default Display;
