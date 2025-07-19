  

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Navbar from "./components/Main/Navbar";
import Home from "./components/Landingpage/Landing";
import About from "./components/Pages/Aboutpage";
import Services from "./components/Pages/Servicespage";
import Blogs from "./components/Pages/Blogspage";
import Footer from "./components/Main/Footer";
import Testimonialspage from "./components/Pages/TestimonialsPage";
import Contactus from "./components/Landingpage/Contactus";
import BlogsDetails from "./components/Pages/BlogDetails";
import Gallery from "./components/Pages/Gallery";
import ContactForm from "./models/ContactUs";
import ComprehensiveHealthForm from "./models/ContactUs";
import HealthForm from "./models/ContactUs";
import { Sidebar } from "./admin/component/Sidebar";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/gallery" element={<Gallery />} /> {/* Doctors page */}
          <Route path="/blogs" element={<Blogs />} /> {/* Blogs page */}
          <Route path="/blogdetails/:id" element={<BlogsDetails />} /> {/* Blog details page */}
          <Route path="/testimonials" element={<Testimonialspage />} /> {/* Testimonials page */}
          <Route path="/contactus" element={<Contactus />} /> {/* Contact page */}
          <Route path="/HealthForm" element={<HealthForm />} /> {/* Contact page */}
          <Route path="/admin/ShardaMohanHomoeopathicClinic/dashboard" element={<Sidebar />} /> {/* Contact page */}
        </Routes> 
    </Router>
  );
};

export default App;
