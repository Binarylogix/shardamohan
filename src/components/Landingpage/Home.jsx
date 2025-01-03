import React from "react";
import Slider from "react-slick";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";
import img1 from "../../assets/ban.png";
import img2 from "../../assets/ban1.png";
import img3 from "../../assets/ban2.png";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: img1,
      heading: "Healing You Naturally, One Remedy at a Time.",
      description:
        "Welcome to Sharda Mohan Homeopathy center! We specialize in holistic health through the power of homeopathy. Visit us for personalized care and natural solutions.",
    },
    {
      image: img2,
      heading: "Hair transformation with Homeopathy.",
      description:
        "Say goodbye to hair problems with our natural homeopathic treatments. Visit us for a personalized consultation and start your journey to healthy hair today.",
    },
    {
      image: img3,
      heading: "Your Journey to Better Health Starts Here.",
      description:
        "At Sharda Mohan Homeopathy center, we guide you on a journey to better health with personalized and effective natural treatments.",
    },
  ];

  return (
    <>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0"></div>
              {/* Home Section */}
              <div className="w-full lg:w-3/5 relative z-10">
                <h1 className="text-5xl font-bold leading-tight mt-10 bg-transparent">
                  {slide.heading}
                </h1>
                <p className="bg-transparent mt-4">{slide.description}</p>
                <div className="my-4">
                  <Link to="/contact">
                    <Button title="See Services" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Home;
