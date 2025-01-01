import React from "react";
import img1 from "../../assets/hair.jpg";
import img2 from "../../assets/health.jpg";
import img3 from "../../assets/ho.jpg";
import img4 from "../../assets/child.jpg";
import img5 from "../../assets/cabin.jpg";
import img6 from "../../assets/cab.jpg";
import img7 from "../../assets/gallery/1.jpeg";
import img8 from "../../assets/gallery/2.jpeg";
import img9 from "../../assets/gallery/3.jpeg";
import img10 from "../../assets/gallery/4.jpeg";
import img11 from "../../assets/gallery/5.jpeg";
import img12 from "../../assets/gallery/6.jpeg";



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Gallery = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold text-center mb-5 text-gray-800">Gallery</h1>
      <p className="text-center mb-8 text-gray-600">
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
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
