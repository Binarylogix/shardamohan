import React from "react";
import img from "../../assets/img/about.jpg";
import headImage from '../../assets/head.png'; // Adjust the path as needed


const Aboutus = () => {
  return (
    <div className="mt-6">

      <div className=" flex flex-col lg:flex-row bg-[url('assets/img/bgAbout.png')] bg-no-repeat bg-cover justify-between items-center lg:px-32 px-5 py-10 lg:pt-6 gap-5">
        <div className=" w-full lg:w-3/4 space-y-4 ">
          <div
            className="bg-cover bg-center p-8 w-64"
            style={{ backgroundImage: `url(${headImage})` }}
          >
            <h1 className="text-4xl font-semibold text-center lg:text-start ">
              About Us
            </h1>
          </div>
          <p className=" text-justify lg:text-start text-sm">
          Welcome to Sharda Mohan Homeopathy Clinic, where holistic healing meets compassionate care. Our clinic is dedicated to providing safe, personalized, and effective treatments that focus on healing from within. We understand that every individual is unique, which is why we offer tailored remedies that address the root causes of illness, promoting long-term wellness and vitality.
          </p>
          <p className="text-justify lg:text-start text-sm">
          With years of experience in treating a wide range of conditions, from chronic illnesses to everyday ailments, our expert homeopaths use natural, gentle remedies to restore balance and improve quality of life. Whether you're seeking relief from stress, digestive issues, allergies, or skin concerns, we are here to guide you on your healing journey.
          </p>
          <p className="text-justify lg:text-start text-sm">
          At Sharda Mohan Homeopathy Clinic, we emphasize a holistic approach that nurtures the body, mind, and spirit. We believe in empowering our patients to make informed decisions about their health and provide unwavering support at every step of the way.Your well-being is our priority, and we are committed to helping you achieve lasting health and happiness. Trust in nature, trust in us. Let us help you discover the healing power of homeopathy.
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