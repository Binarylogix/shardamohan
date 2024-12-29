import React from 'react'
import Button from "../../layouts/Button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/ban.png')] bg-no-repeat bg-cover ">
          <div className="absolute inset-0  "></div>
              {/* Home Section */}
              <div className=" w-full lg:w-3/5 space-y-5   ">
                  <h1 className="text-5xl font-bold leading-tight mt-10 bg-transparent ">
                  Healing You Naturally, One Remedy at a Time..
                  </h1>
                  <p className="bg-transparent">
                  Welcome to Sharda Mohan Homeopathy center! We specialize in holistic health through the power of homeopathy. Visit us for personalized care and natural solutions.
                  </p>
                  <div className='my-4'>
                  <Link to="/contact" > 
                  <Button   title="See Services"/>
                  </Link>
                  </div>
           
                 
              </div>
          </div>
    </div>
  )
}

export default Home