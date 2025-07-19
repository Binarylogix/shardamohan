
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for route-based logic
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Contact from "../../models/Contact"; // Ensure correct import
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/SMlo.png'

const Navbar = () => {
  
  const navigate = useNavigate();

  const openForm = () => {
    navigate('/HealthForm'); // Redirects to the "contact-us" page
  };

  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Scroll behavior
  const location = useLocation(); // Get the current location

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  

  const closeForm = () => {
    setShowForm(false);
  };

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change 50 to your preferred scroll distance
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 text-white">
      <div>
        <div
          className={`flex flex-row justify-between p-5 md:px-32 px-5 transition-all ${
            location.pathname === "/" // Check if we're on the home page
              ? isScrolled
                ? "bg-white shadow-lg fixed top-0 left-0 w-full z-20"
                : "bg-transparent "
              : "bg-white shadow-lg" // Always solid background for non-home pages
          }`}
        >
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" className="text-2xl ">
              <img src={logo} alt="Sharda Mohan " className="w-44" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="/" className="hover:text-black transition-all cursor-pointer text-black">
              Home
            </Link>
            <Link to="/about" className="hover:text-black transition-all cursor-pointer text-black">
              About Us
            </Link>
            <Link to="/services" className="hover:text-black transition-all cursor-pointer text-black">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-black transition-all cursor-pointer text-black">
              Gallery
            </Link>
            <Link to="/blogs" className="hover:text-black transition-all cursor-pointer text-black">
              Blog
            </Link>
            <Link to="/contactus" className="hover:text-black mr-4 transition-all cursor-pointer text-black">
              Conatct Us
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="bg-gradient-to-r from-brightColor to-backgroundColor text-white px-4 py-1 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Fill Form
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} className="text-black"/>
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} className="text-black"/>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-white text-black left-0 top-16 font-semibold md:text-2xl px-8  pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/doctors"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="/blogs"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/conactus"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <div className="lg:hidden">
            <button
              className="bg-gradient-to-r from-brightColor to-backgroundColor w-full text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Fill Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
