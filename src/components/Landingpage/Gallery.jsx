import React from 'react';
import img1 from "../../assets/cabin.jpg";
import img2 from "../../assets/child.jpg";
import img3 from "../../assets/hair.jpg";
import img4 from "../../assets/di.jpg";
import img5 from "../../assets/health.jpg";
import img6 from "../../assets/ho.jpg";


const Gallery = () => {
  return (
    <>
      <div className="items-center px-5 pt-16 lg:px-32 lg:pt-6">
        <h1 className="text-4xl font-semibold text-center w-full lg:text-start mt-8">Gallery</h1>
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
