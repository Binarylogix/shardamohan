import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogsData from "./BlogData";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog by id
  const blog = blogsData.find((blog) => blog.id === id);

  // Set document title for SEO
  useEffect(() => {
    console.log(id,"id")
    if (blog) {
      document.title = `${blog.headline} - Blog`;
    } else {
      document.title = "Blog Not Found";
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl font-semibold">Blog not found.</p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => navigate("/blogs")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
<>
    <Navbar />
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.headline}</h1>
      <img
        src={blog.img}
        alt={blog.headline}
        className="mb-4 w-full h-auto rounded-lg shadow-lg"
      />
      <p className="text-lg leading-relaxed text-gray-700">{blog.description}</p>
      <button
        className="mt-6 p-3 bg-blue-500 text-white rounded shadow-lg"
        onClick={() => navigate("/blogs")}
      >
        Back to Blogs
      </button>
    </div>
    <Footer />

    </>
  );
};

export default BlogDetail;
