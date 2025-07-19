import React from 'react';
import img1 from "../../assets/cabin.jpg";
import img2 from "../../assets/child.jpg";
import img3 from "../../assets/hair.jpg";
import img4 from "../../assets/gallery/5.jpeg";
import img5 from "../../assets/health.jpg";
import img6 from "../../assets/ho.jpg";
import headImage from '../../assets/head.png';

const Gallery = () => {
  return (
    <>
      <div className="items-center px-4 pt-6 md:pt-16 lg:px-28 lg:pt-6">
        <div
          className="bg-cover bg-center p-4 md:p-8 md:w-64"
          style={{ backgroundImage: `url(${headImage})` }}
        >
          <h1 className="text-4xl font-semibold text-center lg:text-start ">
            Gallery
          </h1>
        </div>
        <p className="mb-8 mt-2 text-center lg:text-start text-gray-500">
          Hear what our clients have to say about their experiences with us.
        </p>

        {/* Grid layout for images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full">
            <img className="rounded-lg" src={img2} alt="Gallery 1" />
          </div>
          <div className="w-full">
            <img className="rounded-lg" src={img1} alt="Gallery 2" />
          </div>
          <div className="w-full">
            <img className="rounded-lg" src={img3} alt="Gallery 3" />
          </div>
          <div className="w-full">
            <img className="rounded-lg" src={img4} alt="Gallery 4" />
          </div>
          <div className="w-full">
            <img className="rounded-lg" src={img6} alt="Gallery 5" />
          </div>
          <div className="w-full">
            <img className="rounded-lg" src={img5} alt="Gallery 6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
