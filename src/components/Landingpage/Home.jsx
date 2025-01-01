import React from "react";
import Slider from "react-slick";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";
import img1 from "../../assets/ban.png";
import img2 from "../../assets/ban.png";
import img3 from "../../assets/ban.png";

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

  return (
    <div>
      <Slider {...sliderSettings}>
        {[img1, img2, img3].map((img, index) => (
          <div key={index} className="relative">
            <div
              className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              {/* Home Section */}
              <div className="w-full lg:w-3/5 relative z-10">
                <h1 className="text-5xl font-bold leading-tight mt-10 bg-transparent">
                  Healing You Naturally, One Remedy at a Time..
                </h1>
                <p className="bg-transparent">
                  Welcome to Sharda Mohan Homeopathy center! We specialize in
                  holistic health through the power of homeopathy. Visit us for
                  personalized care and natural solutions.
                </p>
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
    </div>
  );
};

export default Home;
