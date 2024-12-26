
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
          <p className="text-justify text-[15px] lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            labore rerum tempore tenetur commodi natus quos itaque voluptatum
            repudiandae nostrum accusantium vero voluptate aspernatur totam,
            laboriosam aut, et quae consequatur?
          </p>
          <p className="text-justify text-[15px] lg:text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
            suscipit illum, numquam incidunt nostrum dolor officia doloremque
            cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
            Dolor, minus reiciendis.
          </p>
          <p className="text-justify text-[15px] lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
            Accusantium ab expedita veniam nobis aut, in rerum repellendus!
            Exercitationem libero recusandae corrupti accusantium reiciendis in
            placeat illo maxime ea.
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
            <h2 className="text-3xl font-semibold text-center mb-4">Why Choose Homeopathy?</h2>
            <ul className="list-inside list-disc space-y-2 text-[10x] text-justify lg:text-start">
              <li>✨ Gentle and non-invasive treatment</li>
              <li>✨ Works in harmony with the body’s natural healing processes</li>
              <li>✨ Safe for all ages, including children and pregnant women</li>
              <li>✨ Customized treatment based on individual needs</li>
              <li>✨ Helps in preventing future illness by boosting the body’s immunity</li>
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
            If you're seeking an alternative to conventional treatments, homeopathy may be the right choice for you. At <span className="font-bold text-[#6d4c41]">[Your Clinic Name]</span>, we are dedicated to helping you achieve optimal health and wellness in a natural and sustainable way.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
