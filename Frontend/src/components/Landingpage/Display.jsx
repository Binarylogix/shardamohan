import React from 'react';
import Button from "../../layouts/Button";
import { Link } from 'react-router-dom';
import { GiThreeLeaves } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";

const Display = () => {
  return (
    <div className="relative flex flex-col justify-center lg:px-24 items-center w-full min-h-screen bg-[url('assets/img/display.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 px-4 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why choose Homoeopathy?
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Natural remedies for chronic diseases.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  md:px-4">
          {/* Natural Remedies */}
          <div className="flex flex-col items-center bg-green-200 p-6 rounded-xl text-black">
            <GiThreeLeaves size={40} />
            <h2 className="mt-4 font-bold">Natural Remedies</h2>
            <p>Minimal side effects with gentle and non-invasive natural remedies.</p>
          </div>
          {/* Holistic Care */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl text-black">
            <RiMentalHealthFill size={40} />
            <h2 className="mt-4 font-bold">Holistic Care</h2>
            <p>Focuses on treating root causes, promoting overall well-being.</p>
          </div>
          {/* Suitable for All Ages */}
          <div className="flex flex-col items-center bg-green-200 p-6 rounded-xl text-black">
            <FaHeart size={40} />
            <h2 className="mt-4 font-bold">Suitable for All Ages</h2>
            <p>Complements other treatments and is suitable for all age groups.</p>
          </div>
          {/* Cost-Effective */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl text-black">
            <MdOutlineCurrencyExchange size={40} />
            <h2 className="mt-4 font-bold">Cost-Effective</h2>
            <p>Eco-friendly and cost-effective, managing chronic conditions effectively.</p>
          </div>
        </div>

        <div className="my-4">
          <Link to="/contact">
            <Button title="Let's Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Display;
