import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Banner from "./banner";


const Testimonials = () => {
        const data = [
            {
              img: "/src/assets/img/test1.png",
              name: "Emily Johnson",
              designation: "Software Engineer",
              testimonial:
                "The service here is excellent! The staff was friendly and professional, making my experience seamless.",
              rating: 5,
            },
            {
              img: "/src/assets/img/test2.png",
              name: "Michael Smith",
              designation: "Graphic Designer",
              testimonial:
                "A great experience overall. The team ensured everything was perfect, and I felt well cared for.",
              rating: 4,
            },
            {
              img: "/src/assets/img/test3.png",
              name: "Sophia Williams",
              designation: "Entrepreneur",
              testimonial:
                "Professional and efficient. I appreciate the attention to detail and the dedication of the team.",
              rating: 5,
            },
            {
              img: "/src/assets/img/test1.png",
              name: "James Brown",
              designation: "Photographer",
              testimonial:
                "Wonderful service! I was impressed by the friendliness and professionalism of the entire team.",
              rating: 4,
            },
        {
          img: "/src/assets/img/test2.png",
          name: "Dr. Ethan Carter",
          designation: "Neurologist",
          testimonial: "I highly recommend this practice. The staff was friendly and helpful. I'm so glad I chose this practice.",
          rating: 5,
        },
        {
          img: "/src/assets/img/test3.png",
          name: "Dr. Olivia Martinez",
          designation: "Ophthalmologist",
          testimonial: "The staff here is exceptional. They went above and beyond to make sure I had a great experience.",
          rating: 3.5,
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
     <Banner tital="Testimonial" />
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-16 bg-white">
    <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0 mt-20">
      <div>
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          Testimonials
        </h1>
        <p className="mt-2 text-center lg:text-start text-gray-500">
          Hear what our clients have to say about their experiences with us.
        </p>
      </div>
    </div>
    <div className="mt-5 mb-20">
      <Slider ref={slider} {...settings}>
        {data.map((item, index) => (
          <div
            className="h-[350px] text-black bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between mb-2"
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
              <h3 className="text-sm text-gray-500">{item.designation}</h3>
            </div>
            <div className="flex justify-center mt-3">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < item.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  </>
);
};

export default Testimonials