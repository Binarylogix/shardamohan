
import img from "../../assets/img/about.jpg";
import React, { memo } from 'react'
import Banner from "./Banner";


const About = () => {
  return (
    <>
      <Banner tital="About" />
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">



        <div className="w-full lg:w-3/4 space-y-4 mt-10">
          <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
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
        <div className="w-full lg:w-3/4 mt-20">
          <img className="rounded-lg w-full" src={img} alt="img" />
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 gap-5 my-20">
        <div className="w-full lg:w-3/4 space-y-4">
          <h2 className="text-3xl font-semibold text-[#381F15] mb-4">Our Approach to Healing</h2>
          <p className="text-[10x] text-justify :text-start text-[#381F15] leading-relaxed">
            We believe in treating the whole person — mind, body, and spirit. Our expert homeopaths work closely with patients to understand their physical, emotional, and mental health. By creating a personalized treatment plan, we help restore health naturally, without the use of harsh chemicals or side effects.
          </p>
          <div className="bg-backgroundColor text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-4">Why Choose US?</h2>
            <ul className="list-inside list-disc space-y-2 text-[10x] text-justify lg:text-start">
              <li className="flex">✨<h3 className="font-bold">Experienced Practitioners:</h3> Benefit from years of expertise in homeopathic care.</li>
              <li className="flex">✨<h3 className="font-bold">Comprehensive Treatment:</h3> Address the root cause of your health concerns with customized remedies.</li>
              <li className="flex">✨<h3 className="font-bold">Natural & Safe:</h3> Enjoy non-invasive, chemical-free solutions for the whole family.</li>
              <li className="flex">✨<h3 className="font-bold">Patient-Centered Approach:</h3> We listen, understand, and treat with compassion.</li>


            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#381F15] mt-10 mb-6">Common Conditions We Treat</h2>
            <p className="text-lg text-justify lg:text-start text-[#381F15] leading-relaxed">
              Homeopathy can help with a wide range of conditions including but not limited to:
            </p>
            <ul className="list-inside list-disc text-[10x] text-justify lg:text-start text-[#381F15]">
              <li>💨 Allergies and asthma</li>
              <li>🌿 Skin conditions like eczema, acne, and psoriasis</li>
              <li>💪 Chronic pain and musculoskeletal issues</li>
              <li>🍽️ Digestive problems such as IBS</li>
              <li>🧠 Emotional health: anxiety, depression, and stress</li>
              <li>😴 Sleep disorders</li>
              <li>💥 Headaches and migraines</li>
              <li>♀️ Women's health: menstrual issues, menopause</li>
            </ul>
          </div>

          <p className="text-[10x] text-justify lg:text-start text-[#381F15] leading-relaxed">
            If you're seeking an alternative to conventional treatments, homeopathy may be the right choice for you. At <span className="font-bold text-[#6d4c41]">Sharda Mohan Homoeopathic Clinic</span>, we are dedicated to helping you achieve optimal health and wellness in a natural and sustainable way.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
