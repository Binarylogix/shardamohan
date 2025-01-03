import React from "react";
import Button from "../../layouts/Button";
import { Link } from 'react-router-dom';
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { RiWomenFill } from "react-icons/ri";
import { FaDisease } from "react-icons/fa";
import { GiDistressSignal } from "react-icons/gi";
import headImage from "../../assets/head.png";


const Services = () => {

  //Services section Icons
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaDisease size={35} className=" text-backgroundColor" />;
  const icon4 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
  const icon5 = <GiDistressSignal size={35} className=" text-backgroundColor" />;
  const icon6 = <RiWomenFill size={35} className=" text-backgroundColor" />;

  return (
    <div>
      <div className="  flex flex-col justify-center lg:px-32 px-5 pt-16 lg:pt-18">
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
             <div
                        className="bg-cover bg-center p-8 w-80"
                        style={{ backgroundImage: `url(${headImage})` }}
                      >
                        <h1 className="text-4xl font-semibold text-center lg:text-start ">
                          Our Service
                        </h1>
                      </div>
            <p className=" mt-2 text-center lg:text-start">
              Here are six main services that can be highlighted for Sharda Mohan Homeopathy Center:
            </p>
          </div>
          <div className=" mt-4 lg:mt-0">
          <Link to="/services">
            <Button title="See Services" />
          </Link>
            
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-14 mb-20">
          <ServicesCard
            icon={icon1}
            title="Chronic Disease Management"
            description="Holistic treatment for long-term conditions such as arthritis, asthma, diabetes, and thyroid disorders using natural and personalized remedies."
          />
          <ServicesCard
            icon={icon2}
            title="Skin & Hair Care Solutions"
            description="Specialized homeopathic treatments for conditions like acne, eczema, psoriasis, hair fall, dandruff, and alopecia, focusing on root-cause healing."
          />
          <ServicesCard
            icon={icon3}
            title="Allergy & Immunity Boosting"
            description="Safe and effective remedies for seasonal allergies, food intolerances, and enhancing the body’s natural immunity to fight infections."
          />
          <ServicesCard
            icon={icon4}
            title="Pediatric Homeopathy"
            description="Gentle and safe care for children, including treatments for recurrent colds, behavioral issues, teething troubles, and overall growth."
          />
          <ServicesCard
            icon={icon5}
            title="Stress & Emotional Well-Being"
            description="Natural support for mental health issues such as anxiety, depression, sleep disorders, and stress, promoting emotional balance and well-being."
          />
          <ServicesCard
            icon={icon6}
            title="Women’s Health Care"
            description="Focused care for hormonal imbalances, menstrual disorders, PCOS, menopause symptoms, and pregnancy-related health concerns."
          />
        </div>
      </div>
    </div>
  )
}

export default Services