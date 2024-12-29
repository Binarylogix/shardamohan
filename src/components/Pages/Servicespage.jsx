import React from "react";
import Button from "../../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaDisease } from "react-icons/fa";
import { RiWomenFill } from "react-icons/ri";
import { GiDistressSignal } from "react-icons/gi";
import Banner from "./Banner";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine
      size={35}
      className="text-backgroundColor"
      aria-label="Microscope Icon"
    />
  );
  const icon2 = (
    <MdHealthAndSafety
      size={35}
      className="text-backgroundColor"
      aria-label="Health and Safety Icon"
    />
  );
  const icon3 = (
    <FaDisease
      size={35}
      className="text-backgroundColor"
      aria-label="Disease Icon"
    />
  );
  const icon4 = (
    <FaHeartbeat
      size={35}
      className="text-backgroundColor"
      aria-label="Heartbeat Icon"
    />
  );
  const icon5 = (
    <GiDistressSignal
      size={35}
      className="text-backgroundColor"
      aria-label="Distress Signal Icon"
    />
  );
  const icon6 = (
    <RiWomenFill
      size={35}
      className="text-backgroundColor"
      aria-label="Women Icon"
    />
  );

  return (
    <>
      <Banner tital="Service" />
      <div className="flex flex-col justify-center lg:px-32 px-5 pt-6 lg:pt-6">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:flex-row justify-between mt-20">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 text-center lg:text-start mb-6">
              Discover a range of specialized services tailored for holistic
              health and well-being.
            </p>
          </div>
          
        </div>

        {/* Services Cards */}
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
    </>
  );
};

export default Services;
