import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogOpenPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch the blog data based on the ID
    const fetchBlogData = async () => {
      const response = await fetch(`/api/blogs/${id}`); // Replace with actual API
      const data = await response.json();
      setBlog(data);
    };

    fetchBlogData();
  }, [id]); // Re-fetch when the ID changes

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogOpenPage;
