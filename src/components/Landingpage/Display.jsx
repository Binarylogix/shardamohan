import React from 'react';
import Button from "../../layouts/Button";
import { Link } from 'react-router-dom';

const Display = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[500px] bg-[url('assets/img/display.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Welcome to Sharda Mohan Homoeopathic
        </h2>
        <p className="text-lg md:text-1xl mb-2">
          Natural remedies for chronic diseases..
        </p>
        <div className='my-4'>
        <Link to="/contact">
          <Button title="Let's Contact" />
        </Link>
        </div>

      </div>
    </div>
  );
}

export default Display;
