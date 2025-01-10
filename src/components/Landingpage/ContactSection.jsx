import React from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BiSolidMegaphone } from "react-icons/bi";
import { MdOutlineAvTimer } from "react-icons/md";
import img1 from "../../assets/img/bac.png";



const ContactSection = () => {
  return (
    <div className="flex flex-wrap p-6 md:p-20 items-center shadow-lg  rounded-lg justify-center">
      <div className="flex flex-col md:flex-row  rounded-tl-lg rounded-tr-lg w-full">
        {/* Map Section */}
        <div className="flex-1 w-full">
        <div className='bg-white p-4 rounded-lg shadow-lg'>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 w-full "> 
          <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Contact Us
          </h2>
          <form action="/submit-form" method="POST">
            {/* Name Fields */}
            <div className="mb-4 flex flex-col md:flex-row gap-5">
              <input
                type="text"
                id="userFirstName"
                name="userFirstName"
                required
                className="w-full p-3 bg-green-100 rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                required
                className="w-full p-3 bg-green-100 rounded-lg"
                placeholder="Last Name"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <input
                type="number"
                id="userNumber"
                name="userNumber"
                required
                className="w-full p-3 bg-green-100 rounded-lg"
                placeholder="Phone No."
              />
            </div>

            
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="textarea"
                id="textarea"
                name="Message"
                required
                className="w-full h-20 p-3 bg-green-100 rounded-lg"
                placeholder="Message"
              />
            </div>

            

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-backgroundColor text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-10 p-6 shadow-lg rounded-lg w-full">
        {/* Address Section */}
        <div className="flex-1 w-full p-4 md:p-8 bg-cover bg-center shadow-lg rounded-lg " style={{ backgroundImage: `url(${img1})` }}>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Address
          </h2>

          <div className=' flex gap-1 '>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
          </div>
          
          <p className='mt-4 text-sm'>
           Manpasand Health Centre, New Palasiya ,Indore 452001
          </p>
          <p className='mt-2 text-sm'>
          G-3, Vikram Appt, 91, Chandralok Colony, Saket, Indore, Madhya Pradesh 452009
          </p>
          <div className=' items-end w-full mt-4'><FaLocationCrosshairs  size={60}/>
          </div>
        </div>

        {/* get in touch Section */}
        <div className="flex-1 w-full p-4 md:p-8 shadow-lg rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Get In Touch
          </h2>
          <div className=' flex gap-1 '>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
          </div>
          <p className='mt-4'>
            Call:- +919826056610
          </p>
          <p className='mt-4'>
            Email:
          </p>
          <div className=' items-end w-full mt-4'><BiSolidMegaphone  size={60}/>
          </div>

        </div>

        {/* working hours Section */}
        <div className="flex-1 w-full p-4 md:p-8 bg-green-100 shadow-lg rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Working Hours
          </h2>
          <div className=' flex gap-1 '>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
            <div className='bg-black rounded-xl h-[2.5px] w-2'>  </div>
          </div>
          <p className='mt-4'>
            Monday - Sunday: 24 hours Open
          </p>
          <div className=' items-end w-full mt-4'><MdOutlineAvTimer  size={60}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
