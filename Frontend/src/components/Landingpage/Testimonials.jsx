import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import headImage from "../../assets/head.png";
import gents from "../../assets/img/test3.png";
import lady from "../../assets/img/test2.png";


const Testimonials = () => {
  const data = [
    {
      img: gents,
      name: "Anagha Kamat",
      testimonial:
        "Extremely prompt response to phone call and great service. Thank you Dr Parul.",
      rating: 5,
    },
    {
      img: lady,
      name: "Anjali Rai",
      testimonial:
        "Amazing service, Doctor is very knowledgeable and cures Hair and skin related problems",
      rating: 5,
    },
    {
      img: gents,
      name: "pawan kamal",
      testimonial:
        "Dr. Parul ma'am's treatment is very good and the best thing is that she serves at ma'am's clinic 24 hours a day and explains things with great love.",
      rating: 5,
    },
    {
      img: gents,
      name: "Danish Farooqui",
      testimonial:
        "Hi, Mam you had done a very grateful work for my daughter.  Because of you she had nice hair. I never ever had Dr. U r very careful, understand and helpful towards patients. .",
      rating: 5,
    },
    {
      img: lady,
      name: "Avani Verma",
      testimonial: "I tried everything for hair growth but nothing helped me, but after getting consultation from Sharda Mohan I saw hair growth and that too without chemicals.",
      rating: 5,
    },
    {
      img: lady,
      name: "ARPITA GHOSH",
      testimonial: "The staff here is exceptional. They went above and beyond to make sure I had a great experience.",
      rating: 5,
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
    <div className="flex flex-col justify-center lg:px-32 px-3 md:px-5 pt-8 md:pt-16 bg-[url('assets/img/bgtestimonial.png')] bg-no-repeat bg-cover bg-white">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <div
            className="bg-cover bg-center p-4 md:p-8 md:w-64"
            style={{ backgroundImage: `url(${headImage})` }}
          >
            <h1 className="text-4xl font-semibold text-center lg:text-start ">
              Testimonial
            </h1>
          </div>
          <p className="mt-2 text-center lg:text-start text-gray-500">
            Hear what our clients have to say about their experiences with us.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-20">
        <Slider ref={slider} {...settings}>
          {data.map((item, index) => (
            <div
              className="h-[370px] md:h-[350px] text-black bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between mb-2"
              key={index}
            >
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt="User"
                  className="h-20 w-20 rounded-full mb-4 object-cover"
                />
                <p className="text-center text-gray-600 italic">
                  "{item.testimonial}"
                </p>
              </div>
              <div className="flex flex-col items-center mt-4">
                <h1 className="font-semibold text-xl">{item.name}</h1>
              </div>
              <div className="flex justify-center mt-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials