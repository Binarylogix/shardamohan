import React from "react";
import { useNavigate } from "react-router-dom";
import blogsData from "./BlogData";
import Banner from "./Banner";
import Button from "../../layouts/Button";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";

const Blogs = () => {
  const navigate = useNavigate();
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <>
      <Navbar />
      <Banner tital="Blog"/>
      <div className="flex flex-col justify-center lg:px-24 px-5 pt-10">
        <div className="mt-4 flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Latest Blogs
            </h1>
            <p className="mt-2 text-center lg:text-start">
              Here are some blog topics for homeopathic treatments:
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button title="Our Articles" />
          </div>
        </div>
        <div className="my-8 mb-20">
          <div className="gap-5 md:gap-10 width-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {blogsData.map((blog) => (
              <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={blog.img}
                  alt={blog.headline}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-bold mt-4">{blog.headline}</h2>
                <p className="text-gray-600 mt-2">     {truncateText(blog.description, 16)}</p>
                <button
                  onClick={() => navigate(`/blogdetails/${blog.id}`)}
                  className="mt-4 py-2 px-3 bg-gradient-to-r from-brightColor to-backgroundColor text-white rounded text-sm "
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
