import React from "react";
import img from "../../assets/img/about.jpg";

const Aboutus = () => {
  return (
    <div>

      <div className=" flex flex-col lg:flex-row bg-[url('assets/img/bgAbout.png')] bg-no-repeat bg-cover justify-between items-center lg:px-32 px-5 pt-10 lg:pt-6 gap-5">
        <div className=" w-full lg:w-3/4 space-y-4 ">
          <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
          <p className=" text-justify lg:text-start ">
            Welcome to Sharda Mohan Homeopathy Center, your trusted destination for natural and holistic healing. With a commitment to providing gentle and effective treatments, we specialize in addressing a wide range of acute and chronic health conditions through the proven science of homeopathy.


          </p>
          <p className="text-justify lg:text-start">
            At Sharda Mohan Homeopathy Center, our expert practitioners focus on personalized care, ensuring that every treatment plan is tailored to your unique health needs. Whether you're dealing with allergies, skin disorders, respiratory issues, or stress-related conditions, we offer safe and side-effect-free solutions designed to restore your overall well-being.
          </p>
          <p className="text-justify lg:text-start">
          To promote wellness and balance by combining traditional homeopathy with modern expertise, helping individuals achieve lasting health naturally.
          </p>
        </div>
        <div className=" w-full lg:w-3/4 mb-10">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus