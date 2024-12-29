// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Doctors from "./components/Doctors";
// import Blogs from "./components/Blogs";
// import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <main>
//         <div id="home">
//           <Home />
//         </div>

//         <div id="about">
//           <About />
//         </div>

//         <div id="services">
//           <Services />
//         </div>

//         <div id="doctors">
//           <Doctors />
//         </div>

//         <div id="blog">
//           <Blogs />
//         </div>

//         <div id="testimonials">
//           <Testimonials/>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Navbar from "./components/Main/Navbar";
import Home from "./components/Landingpage/Landing";
import About from "./components/Pages/Aboutpage";
import Services from "./components/Pages/Servicespage";
import Doctors from "./components/Pages/Doctorspage";
import Blogs from "./components/Pages/Blogspage";
import Footer from "./components/Main/Footer";
import Testimonialspage from "./components/Pages/TestimonialsPage";
import Contactus from "./components/Landingpage/Contactus";
import BlogsDetails from "./components/Pages/BlogDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/doctors" element={<Doctors />} /> {/* Doctors page */}
          <Route path="/blogs" element={<Blogs />} /> {/* Blogs page */}
          <Route path="/blogdetails/:id" element={<BlogsDetails />} /> {/* Blog details page */}
          <Route path="/testimonials" element={<Testimonialspage />} /> {/* Testimonials page */}
          <Route path="/contact" element={<Contactus />} /> {/* Contact page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
