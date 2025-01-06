import React from "react";
import Button from "../../layouts/Button";
import Banner from "../Pages/Banner";
import headImage from "../../assets/head.png";

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
            className="rounded-lg"
          ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 max-w-lg space-y-6 bg-white p-6 md:p-10 rounded-lg shadow-lg">
         <div
                    className="bg-cover bg-center p-2 w-72"
                    style={{ backgroundImage: `url(${headImage})` }}
                  >
                    <h1 className="text-4xl  font-semibold text-center lg:text-start ">
                      Contact Us
                    </h1>
                  </div>

        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            name="userLastName"
            id="userLastName"
            placeholder="Last Name"
          />
        </div>

        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="number"
            name="userNumber"
            id="userNumber"
            placeholder="Phone No."
          />
        </div>

        <div className="flex flex-col">
          <input
            className="py-3 px-4 bg-green-100 h-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="message"
            name="message"
            id="message"
            placeholder="Message"
          />
        </div>
        
        <div className="flex">
          <Button title="Submit" className='bg-backgroundColor' />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactus;
