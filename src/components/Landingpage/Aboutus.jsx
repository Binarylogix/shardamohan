import React from "react";
import img from "../../assets/img/about.jpg";
import headImage from '../../assets/head.png'; // Adjust the path as needed


const Aboutus = () => {
  return (
    <div className="mt-6">

      <div className=" flex flex-col lg:flex-row  justify-between items-center  gap-5">
      <div className=" bg-[url('assets/img/bgAbout.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row p-12  gap-5">
        <div className=" w-full lg:w-3/4 p-4 rounded-xl shadow-lg space-y-4 ">
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
          Homeopathy is the most trusted natural form of medicine that till date is being used by millions of people worldwide. Homeopathy runs on the objective that "the body can cure itself," and with this particular idea, Dr.Parul Agrawal, an eminent homeopath started ShardaMohan Clinic a dedicated homeopathy clinic where every patient is treated with utmost precision and care with sympathy.
          </p>
          <p className="text-justify lg:text-start text-sm">
ShardaMohan Clinic comes forward with a holistic approach to treat patients with personalized Constitutional Homeopathic Treatment that serves to be far better than the conventional treatments. It consists of well experienced Homeopathic doctor Parul Agrawal who happen to be experts in her field.
          </p>
        </div>
        <div className=" w-full lg:w-3/4 mb-10">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus