import React from "react";
import Button from "../../layouts/Button";
import Banner from "../Pages/banner";

const Contactus = () => {
  return (
    <>
    <Banner tital="Contact US" />
    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 px-5 py-10 lg:py-20">
      {/* Map Section */}
      
      <div className="w-full lg:w-1/2 p-4 md:p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 max-w-lg space-y-6 bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-backgroundColor">
          Contact Us
        </h1>

        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            name="userLastName"
            id="userLastName"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="number"
            name="userNumber"
            id="userNumber"
            placeholder="Phone No."
          />
        </div>
        <div className="flex justify-center bg-backgroundColor">
          <Button title="Submit" className='bg-backgroundColor' />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactus;
