import React from "react";
import { useNavigate } from "react-router-dom";
import blogsData from "../../components/Pages/BlogData";
import Button from "../../layouts/Button";
import headImage from "../../assets/head.png";

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

      <div className="flex flex-col justify-center lg:px-32 px-5 pt-4 md:pt-24">
        <div className="mt-10 flex flex-col items-center lg:flex-row justify-between">
          <div>
            <div
              className="bg-cover bg-center p-4 md:p-8 md:w-80"
              style={{ backgroundImage: `url(${headImage})` }}
            >
              <h1 className="text-4xl font-semibold text-center lg:text-start ">
                Latest Blogs
              </h1>
            </div>
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
              <div key={blog.id} className="bg-white shadow-lg rounded-lg ">
                <img
                  src={blog.img}
                  alt={blog.headline}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="px-4 pb-4">
                <h2 className="text-xl font-bold mt-4">{blog.headline}</h2>
                <p className="text-gray-600 mt-2">     {truncateText(blog.description, 16)}</p>
                <button
                  onClick={() => navigate(`/blogdetails/${blog.id}`)}
                  className="mt-4 py-2 px-3 bg-gradient-to-r from-brightColor to-backgroundColor text-white rounded text-sm "
                >
                  Read More
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
