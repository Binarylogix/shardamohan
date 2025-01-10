import React from 'react';
import Button from "../../layouts/Button";
import { Link } from 'react-router-dom';
import { GiThreeLeaves } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";





const Display = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[700px] bg-[url('assets/img/display.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why choose Homoeopathy?
        </h2>
        <p className="text-lg md:text-1xl mb-2">
          Natural remedies for chronic diseases..
        </p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-10 gap-10'>
          <div className='flex flex-col items-center bg-green-200 p-6 rounded-xl text-black'>
          <GiThreeLeaves  size={40}/>
            <h2 className='mt-4 bold'>Natural Remedies
            </h2>
            <p >Emphasis on minimal side effects with natural remedies that are gentle and non-invasive.</p>
          </div>
          <div className='flex flex-col items-center bg-white p-6 rounded-xl text-black'>
          <RiMentalHealthFill size={40}/>
            <h2 className='mt-4'>Holistic Care</h2>
            <p>Focuses on treating the root cause rather than just the symptoms, promoting overall well-being.</p>
          </div>
          <div className='flex flex-col items-center  bg-green-200 p-6 rounded-xl text-black'>
          <FaHeart size={40}/>
            <h2 className='mt-4'>Suitable for All Ages</h2>
            <p>A versatile choice that complements other treatments and is suitable for everyone, regardless of age.</p>
          </div>
          <div className='flex flex-col items-center  bg-white p-6 rounded-xl text-black'>
          <MdOutlineCurrencyExchange size={40}/>
            <h2 className='mt-4'>Cost-Effective</h2>
            <p>Homoeopathy is an eco-friendly, cost-effective approach that helps manage chronic conditions and prevent future illnesses.</p>
          </div>
        </div>

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
