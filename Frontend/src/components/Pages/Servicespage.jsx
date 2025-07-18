import React from "react";
import Button from "../../layouts/Button";
import ServicesCard from "../../layouts/ServicesCard";
import Banner from "./Banner";
import img1 from "../../assets/img/WomenDisease.png";
import img2 from "../../assets/img/skincare.png";
import img3 from "../../assets/img/warts.png";
import img4 from "../../assets/img/piles.png";
import img5 from "../../assets/img/gastric.png";
import img6 from "../../assets/img/child.png";

const Services = () => {
    //Services section Icons
      const icon1 = (
        <img src={img1} alt="Women Diseases" />
      );
    
      const icon2 = (
        <img src={img2} alt="skincare" />
      );
        
      const icon3 = (
        <img src={img3} alt="warts" />
      );
    
      const icon4 = (
        <img src={img4} alt="piles" />
      );
    
      const icon5 = (
        <img src={img5} alt="piles" />
      );
    
      const icon6 = (
        <img src={img6} alt="Sore throat" />
      );
      
  return (
    <>
      <Banner tital="Service" />
      <div className="flex flex-col justify-center lg:px-24 px-5 pt-6 lg:pt-6">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:flex-row justify-between mt-10">
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
            title="Women's Diseases"
            description="
Women's diseases include menstrual disorders, polycystic ovary syndrome (PCOS), endometriosis, fibroids, menopause symptoms, breast cancer, urinary tract infections (UTIs), osteoporosis, cervical cancer, and reproductive health issues, affecting overall well-being."
          />
          <ServicesCard
            icon={icon2}
            title="Skin & Hair Care Solutions"
            description="Skin and hair care solutions include hydration, sunscreen, balanced diets, gentle cleansing, exfoliation, anti-aging products, hair oils, scalp care, serums, hydration masks, and dermatologist-recommended treatments for radiant health."
          />
          <ServicesCard
            icon={icon3}
            title="Warts( Ointment available)"
            description="Warts can be treated with over-the-counter ointments containing salicylic acid, which softens and removes wart tissue. Cryotherapy-based gels and prescription-strength topical treatments are also effective for stubborn cases."
          />
          <ServicesCard
            icon={icon4}
            title="Piles (Ointment available)"
            description="Piles can be treated with ointments containing hydrocortisone, lidocaine, or witch hazel, which help reduce inflammation, relieve pain, and soothe itching. Prescription treatments may be recommended for severe cases."
          />
          <ServicesCard
            icon={icon5}
            title="Gastric Issues "
            description="Gastric issues include indigestion, acid reflux, bloating, ulcers, and heartburn. Treatment options include antacids, proton pump inhibitors (PPIs), lifestyle changes, dietary adjustments, and stress management to improve digestive health."
          />
          <ServicesCard
            icon={icon6}
            title="Sore throat,common cold in children"
            description="Sore throat and common cold in children are often caused by viral infections. Treatment includes rest, hydration, saline gargles, over-the-counter pain relievers, and humidity, with medical consultation if symptoms persist."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
