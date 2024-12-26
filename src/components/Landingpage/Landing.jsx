import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutus from "./Aboutus"
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Doctors from "./Doctors";
import Home from "./Home";
import Display from "./Display";
import Contactsection from "./ContactSection";

const Landing = () => {

  return (
    <>
          
          {/* Home Section */}
          <Home/>

          {/* About Section */}
          <Aboutus/>

          {/* Services Section */}
          <Services/>

          {/* Doctors Section */}
          <Doctors/>

          {/* Blogs Section */}
          <Blogs/>

          {/* Testimonials  Section */}
          <Testimonials/>

          {/* Display Section */}
          <Display/>

          {/* Contact Section */}
          <Contactsection/>
          
  </>
  );
};

export default Landing;
