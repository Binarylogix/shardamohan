
import React, { useRef, memo } from 'react'
import Banner from "./Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/img/about.jpg";
import drparul from "../../assets/gallery/drparul.jpeg";
import img1 from "../../assets/certificate/1.jpeg";
import img2 from "../../assets/certificate/2.jpeg";
import img3 from "../../assets/certificate/3.jpeg";
import img4 from "../../assets/certificate/4.jpeg";
import img5 from "../../assets/certificate/5.jpeg";



const About = () => {

  const data = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img:img5,
    },

  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };


  return (
    <>
      <Banner tital="About" />
      <div className=" justify-between items-center lg:px-24 px-5 pt-16 lg:pt-10 gap-5">
        <div className="mt-20 gap-20 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-3/4 space-y-4 py-20 ">
            <h1 className="text-4xl font-semibold text-center lg:text-start">About <span className="text-green-600">Dr. Parul Agrawal</span></h1>
            <p className="text-justify lg:text-start ">
              Homeopathy is the most trusted natural form of medicine that till date is being used by millions of people worldwide. Homeopathy runs on the objective that "the body can cure itself," and with this particular idea, Dr.Parul Agrawal, an eminent homeopath started ShardaMohan Clinic a dedicated homeopathy clinic where every patient is treated with utmost precision and care with sympathy.
            </p>
            <p className="text-justify lg:text-start ">
            I found this ShardaMohan Clinic that treats its patients with the utmost care and personalized homeopathic treatments and shall have a great impact on their health and lives As they say, Fortune favors the brave, I feel very fortunate to say that I have a solid association of expert homeopathy doctors and dedicated support that had supported me and my vision.
            </p>
          </div>
          <div className="w-full lg:w-2/4">
            <img className="rounded-lg w-full h-[500px]" src={drparul} alt="img" />
          </div>
        </div>
        <div className="mt-20 gap-10 flex flex-col lg:flex-row">
         
          <div className="w-full lg:w-3/4">
            <img className="rounded-lg w-full" src={img} alt="img" />
          </div>
          <div className="w-full lg:w-3/4 space-y-4 ">
            <h1 className="text-4xl font-semibold text-center lg:text-start">About <span className="text-green-600">Sharda Mohan Homoeopathic Clinic </span></h1>
            <p className=" text-justify lg:text-start ">
              Welcome to Sharda Mohan Homeopathy Clinic, where holistic healing meets compassionate care. Our clinic is dedicated to providing safe, personalized, and effective treatments that focus on healing from within. We understand that every individual is unique, which is why we offer tailored remedies that address the root causes of illness, promoting long-term wellness and vitality.
            </p>
            <p className="text-justify lg:text-start ">
              Homeopathy is the most trusted natural form of medicine that till date is being used by millions of people worldwide. Homeopathy runs on the objective that "the body can cure itself," and with this particular idea, Dr.Parul Agrawal, an eminent homeopath started ShardaMohan Clinic a dedicated homeopathy clinic where every patient is treated with utmost precision and care with sympathy.
            </p>
            <p className="text-justify lg:text-start ">
              ShardaMohan Clinic comes forward with a holistic approach to treat patients with personalized Constitutional Homeopathic Treatment that serves to be far better than the conventional treatments. It consists of well experienced Homeopathic doctor Parul Agrawal who happen to be experts in her field.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between items-center lg:px-24 px-5 gap-5 my-20">
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


      {/* certigicate sections  */}


      <div className="flex flex-col justify-center lg:px-24 px-5 pt-16 bg-[url('assets/img/bgtestimonial.png')] bg-no-repeat bg-cover bg-white">
        <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Our Achievement
            </h1>

          </div>
        </div>
        <div className="mt-5 mb-20">
          <Slider ref={slider} {...settings}>
            {data.map((item, index) => (
              <div
                className=" text-black bg-white rounded-xl shadow-lg p-1 flex flex-col justify-between"
                key={index}
              >
                <div className="flex flex-col gap-10 items-center">
                  <img
                    src={item.img}
                    alt="User"
                    className=" rounded-md object-cover"
                  />

                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>

    </>
  );
};

export default About;
