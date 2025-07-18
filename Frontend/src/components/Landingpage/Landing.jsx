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
import Gallery from "./Gallery";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";
import WhyChooseUs from "./WhyChooseUs";
const Landing = () => {

  return (
    <>
          <Navbar/>
          {/* Home Section */}
          <Home/>
          <WhyChooseUs />

          {/* About Section */}
          <Aboutus/>

          {/* Services Section */}
          <Services/>

          {/* Doctors Section */}
          <Doctors/>

          {/* Blogs Section */}
          <Blogs/>
          
        
            {/* Display Section */}
            <Display/>

         
          {/* Testimonials Section */}  
          <Testimonials/>

          {/* Gallery Section */}
          <Gallery/>

          {/* Contact Section */}
          <Contactsection/>
          
          <Footer/>

          
  </>
  );
};

export default Landing;
