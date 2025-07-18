import React from "react";
import Banner from "../Pages/Banner";
import img1 from "../../assets/hair.jpg";
import img2 from "../../assets/health.jpg";
import img3 from "../../assets/ho.jpg";
import img4 from "../../assets/child.jpg";
import img5 from "../../assets/cabin.jpg";
import img6 from "../../assets/cab.jpg";
import img7 from "../../assets/gallery/1.jpeg";
import img8 from "../../assets/gallery/2.jpeg";
import img9 from "../../assets/gallery/3.jpeg";
import img11 from "../../assets/gallery/5.jpeg";
import img12 from "../../assets/gallery/6.jpeg";
import img13 from "../../assets/gallery/7.jpeg";
import img15 from "../../assets/gallery/9.jpeg";
import img16 from "../../assets/gallery/10.jpeg";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";



const images = [img1, img2, img3, img4, img6, img7, img8, img11, img9, img12, img13, img16, img5,img15];

const Gallery = () => {
  return (
    <>
    <Navbar />
     <Banner tital="Galley" />
     <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-16 lg:pt-16 gap-5" />
    <div className="px-10 pb-10">
      <p className=" mb-8 text-gray-600">
        Discover our beautifully curated gallery.
      </p>
      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full  object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Gallery;
