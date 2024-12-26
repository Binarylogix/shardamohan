<<<<<<< HEAD
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-wrap p-6 md:p-20 items-center justify-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg w-full">
        {/* Map Section */}
        <div className="flex-1 w-full p-4 md:p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 w-full p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Contact Us
          </h2>
          <form action="/submit-form" method="POST">
            {/* Name Fields */}
            <div className="mb-4 flex flex-col md:flex-row gap-5">
              <input
                type="text"
                id="userFirstName"
                name="userFirstName"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Last Name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <input
                type="number"
                id="userNumber"
                name="userNumber"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Phone No."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-backgroundColor text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
=======
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-wrap p-6 md:p-20 items-center justify-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg w-full">
        {/* Map Section */}
        <div className="flex-1 w-full p-4 md:p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 w-full p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Contact Us
          </h2>
          <form action="/submit-form" method="POST">
            {/* Name Fields */}
            <div className="mb-4 flex flex-col md:flex-row gap-5">
              <input
                type="text"
                id="userFirstName"
                name="userFirstName"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Last Name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <input
                type="number"
                id="userNumber"
                name="userNumber"
                required
                className="w-full p-3 bg-[#d5f2ec] rounded-lg"
                placeholder="Phone No."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-backgroundColor text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
>>>>>>> 9608b116424ff4f73c1c398beab1314cd0253e9f
